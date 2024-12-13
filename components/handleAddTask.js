import { addDoc, collection } from "firebase/firestore"; 
import { db, auth } from "../firebase"; 

const handleAddTask = async (taskInput, reminder, selectedCategory) => {
  const user = auth.currentUser; 
  if (!user) {
    console.error("No user is logged in");
    return;
  }

  try {
    await addDoc(collection(db, "tasks"), {
      task: taskInput,         
      completed: false,          
      reminder: new Date(reminder), 
      categoryId: selectedCategory,
      userId: user.uid,          
    });

    console.log("Task added successfully.");
  } catch (error) {
    console.error("Error adding task:", error.message);
  }
};

export default handleAddTask;
