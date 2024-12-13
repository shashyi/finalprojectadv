
import React, { useState } from "react";
import addCategory from "../components/addCategory";
import handleAddTask from "../components/handleAddTask";

const Task = ({ fetchTasks }) => {
  const [taskInput, setTaskInput] = useState("");
  const [reminder, setReminder] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [error, setError] = useState("");

  const handleAdd = async () => {
    try {
      await handleAddTask(taskInput, reminder, selectedCategory);
      setTaskInput("");
      setReminder("");
      setSelectedCategory("");
      fetchTasks(); 
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Add a New Task</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleAdd(); }}>
        <input
          type="text"
          placeholder="Enter task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          required
        />
        <input
          type="datetime-local"
          value={reminder}
          onChange={(e) => setReminder(e.target.value)}
          required
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          {}
        </select>
        <button type="submit">Add Task</button>
      </form>
      
      <h2>Add a New Category</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        const userUid = "v8cyM9Dkhnfe5BqLb866iI7DnKx2"; 
        addCategory(userUid, "Work"); 
      }}>
        <input
          type="text"
          placeholder="Enter category name"
          required
        />
        <button type="submit">Add Category</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>} {}
    </div>
  );
};

export default Task;
