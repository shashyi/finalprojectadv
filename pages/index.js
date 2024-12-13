import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, where } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth"; 
import { useRouter } from "next/router"; 

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [reminder, setReminder] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAnalytics, setShowAnalytics] = useState(false); 
  const router = useRouter(); 
  useEffect(() => {
    const user = getAuth().currentUser;
    if (!user) {
      router.push("/auth"); 
    }
  }, [router]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesSnapshot = await getDocs(collection(db, "categories"));
        const categoriesList = categoriesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCategories(categoriesList);
      } catch (error) {
        console.error("Error fetching categories: ", error.message);
      }
    };

    const fetchTasks = async () => {
      const user = getAuth().currentUser;
      if (!user) {
        console.error("No user is logged in");
        return;
      }

      try {
        let tasksQuery = query(collection(db, "tasks"), where("userId", "==", user.uid));

        if (selectedCategory) {
          tasksQuery = query(tasksQuery, where("categoryId", "==", selectedCategory));
        }

        const tasksSnapshot = await getDocs(tasksQuery);

        const tasksList = tasksSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const filteredTasks = tasksList.filter((task) =>
          task.task.toLowerCase().includes(searchQuery.toLowerCase()) 
        );

        setTasks(filteredTasks); 
      } catch (error) {
        console.error("Error fetching tasks: ", error.message);
      }
    };

    fetchCategories();
    fetchTasks();
  }, [selectedCategory, searchQuery]); 

  const handleAddTask = async () => {
    if (!taskInput || !selectedCategory) {
      return;
    }

    try {
      const user = getAuth().currentUser;

      if (!user) {
        console.error("No user is logged in");
        return;
      }

      const newTask = {
        task: taskInput,
        completed: false,
        reminder: new Date(reminder),
        categoryId: selectedCategory,
        userId: user.uid,  
      };

      const docRef = await addDoc(collection(db, "tasks"), newTask);

      setTasks((prevTasks) => [
        ...prevTasks,
        { ...newTask, id: docRef.id } 
      ]);

      setTaskInput("");
      setReminder("");
      setSelectedCategory("");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(getAuth());
    
      router.push("/auth");
    } catch (error) {
      console.error("Error signing out: ", error.message);
      alert("There was an error logging out.");
    }
  };

  const handleCompleteTask = async (taskId) => {
    try {
      const taskDoc = doc(db, "tasks", taskId);
      await updateDoc(taskDoc, { completed: true });
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, completed: true } : task
        )
      );
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteDoc(doc(db, "tasks", taskId));
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (error) {
      alert(error.message);
    }
  };

  const calculateAnalytics = () => {
    const completedTasks = tasks.filter(task => task.completed);

    const totalTimeSpent = completedTasks.reduce((total, task) => {
      const reminderDate = new Date(task.reminder.seconds * 1000);
      const now = new Date();
      const timeSpent = (now - reminderDate) / 1000 / 60; 
      return total + timeSpent;
    }, 0);

    return { completedTasks: completedTasks.length, totalTimeSpent };
  };

  const handleSearch = () => {
    setSearchQuery(searchQuery); 
  };

  return (
    <div className="homepage-container">
      <h1>My Tasks</h1>

      {}
      <div className="search-section">
        <input
          type="text"
          placeholder="Search tasks"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {}
      <div className="category-section">
        <h2>Select Category</h2>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="category-select"
        >
          <option value="">Select Category</option>
          {categories.length > 0 ? (
            categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))
          ) : (
            <option disabled>No categories available</option>
          )}
        </select>
      </div>

      {}
      <div className="task-input-section">
        <input
          type="text"
          placeholder="Enter task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <input
          type="datetime-local"
          value={reminder}
          onChange={(e) => setReminder(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      {}
      <div className="logout-button-container">
        <button className="logout-button" onClick={handleLogout}>Log Out</button>
      </div>

      {}
      <div className="analytics-toggle-button">
        <button onClick={() => setShowAnalytics(!showAnalytics)}>
          {showAnalytics ? "Back to Tasks" : "Show Analytics"}
        </button>
      </div>

      {}
      {showAnalytics ? (
        <div className="analytics">
          <h3>Task Analytics</h3>
          <p>Tasks Completed: {calculateAnalytics().completedTasks}</p>
          <p>Total Time Spent: {calculateAnalytics().totalTimeSpent} minutes</p>
        </div>
      ) : (
        <>
          <h2>Your Tasks</h2>
          <div className="task-list">
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <div key={task.id} className="task-item">
                  <p>{task.task}</p>
                  <p>
                    Category: {categories.find(category => category.id === task.categoryId)?.name || 'No Category'}
                  </p>
                  <p>
                    {task.reminder
                      ? new Date(task.reminder.seconds * 1000).toLocaleString() 
                      : "No Reminder"}
                  </p>
                  <button 
                    className={task.completed ? 'complete-btn' : ''} 
                    onClick={() => handleCompleteTask(task.id)}
                  >
                    {task.completed ? 'Completed' : 'Mark as Completed'}
                  </button>
                  <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                </div>
              ))
            ) : (
              <p>No tasks available</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
