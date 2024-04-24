import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filterOption, setFilterOption] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage] = useState(10);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data = response.data;
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
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
    setCurrentPage(1);
  };

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;

  const filteredTasks =
    filterOption === "all"
      ? tasks
      : tasks.filter(
          (task) => task.completed === (filterOption === "completed")
        );

  const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(currentTasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTasks(items);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: currentTasks,
        setTasks,
        addTask,
        deleteTask,
        toggleTaskCompletion,
        filterOption,
        handleFilterChange,
        currentPage,
        tasksPerPage,
        indexOfFirstTask,
        indexOfLastTask,
        totalTasks: filteredTasks.length,
        paginate,
        handleOnDragEnd,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
