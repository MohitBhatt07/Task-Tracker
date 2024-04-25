import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filterOption, setFilterOption] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    
    const fetchTasks = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data = response.data;
        setTasks(data.slice(0,40));
        
      } catch (error) {
        toast.error("Error in fetching tasks ");
      }
      setIsLoading(false);
    };

    fetchTasks();
    
  }, []);

  const addTask = (title) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      completed: false,
      userId: 1,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    toast("Task deleted" ,{
      className : "delete-toast",
      hideProgressBar : true,
    });
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleFilterChange = (option) => {
    setFilterOption(option);
  };


  const filteredTasks =
    filterOption === "all"
      ? tasks
      : tasks.filter(
          (task) => task.completed === (filterOption === "completed")
        );

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    // console.log(result);
    console.log("from :" + result.source.index + " to " + result.destination.index);
    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTasks(items);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        setTasks,
        addTask,
        deleteTask,
        toggleTaskCompletion,
        filterOption,
        handleFilterChange,
        isLoading,
        handleOnDragEnd ,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
