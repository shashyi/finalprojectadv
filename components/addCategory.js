import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth"; 
import { useRouter } from "next/router"; 

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [reminder, setReminder] = useState("");
  const router = useRouter(); 

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
      try {
        const tasksSnapshot = await getDocs(collection(db, "tasks"));
        const tasksList = tasksSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTasks(tasksList);
      } catch (error) {
        console.error("Error fetching tasks: ", error.message);
      }
    };

    fetchCategories();
    fetchTasks();
  }, []);

  // Handle task addition
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

      await addDoc(collection(db, "tasks"), {
        task: taskInput,
        completed: false,
        reminder: new Date(reminder),
        categoryId: selectedCategory,
        userId: user.uid,
      });

      setTaskInput("");
      setReminder("");
      setSelectedCategory("");
      fetchTasks(); 
    } catch (error) {
      alert(error.message);
    }
  };

  // Handle sign out
  const handleLogout = async () => {
    try {
      await signOut(getAuth());
      router.push("/login");
    } catch (error) {
      console.error("Error signing out: ", error.message);
      alert("There was an error logging out.");
    }
  };

  return (
    <div className="homepage-container">
      <h1>My Tasks</h1>

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
      <div>
        <button onClick={handleLogout}>Log Out</button>
      </div>

      <h2>Your Tasks</h2>
      <div className="task-list">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div key={task.id} className="task-item">
              <p>{task.task}</p>
              <p>{task.reminder ? new Date(task.reminder.seconds * 1000).toLocaleString() : "No Reminder"}</p>
              <button onClick={() => handleCompleteTask(task.id)}>
                Mark as Completed
              </button>
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No tasks available</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
