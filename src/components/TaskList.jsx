import React, { useState, useCallback, useEffect, useContext } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import DropComponent from "./DropComponent";
import TaskFilter from "./TaskFilter";
import { TaskContext } from "../context/TaskContext";
import { AiOutlineCheckCircle, AiOutlineDelete } from "react-icons/ai";
import Loader from "./Loader";

function TaskList() {
  const { tasks, isLoading, handleOnDragEnd,deleteTask :handleDeleteTask ,toggleTaskCompletion : handleMarkCompleted , filterOption } =
    useContext(TaskContext);
  console.log(tasks.filter((task) => task.completed === false));
  let newTasks = [];
  if (filterOption === "completed")
    newTasks = tasks.filter((task) => task.completed === true);
  else if (filterOption === "incomplete")
    newTasks = tasks.filter((task) => task.completed === false);
  else newTasks = tasks;

  return (
    <div className="mt-24 flex-col justify-center items-center space-y-4 w-screen">
      <h1 className="dark:bg-indigo-800 bg-purple-800 text-white w-fit m-auto px-5 rounded-lg shadow-lg shadow-cyan-200 text-3xl font-serif ml-10">
        TASK LIST
      </h1>
      <TaskFilter />
      <h1 className="dark:bg-indigo-800 bg-purple-800  mx-[10%] rounded-md text-center text-gray-200  font-bold" >Total tasks - {newTasks.length}</h1>
      <div className="drag-drop flex justify-center items-center w-screen">

        {filterOption === "all" ? (
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <DropComponent tasks={newTasks} />
          </DragDropContext>
        ):
        isLoading ? <Loader/> :(
          <ul className="flex w-4/5 bg-purple-800 dark:bg-indigo-900 dark:shadow-xl dark:shadow-slate-400 flex-col space-y-2 p-4 rounded-md overflow-hidden shadow-md">
            {newTasks.map((task) => (
              <li
                key={task.id}
                className={`task min-h-30 dark:bg-gray-800 px-4 py-2 dark:hover:text-black dark:hover:bg-gray-200 flex justify-between items-center rounded-md max-[600px]:flex-col max-[600px]:gap-2 hover:bg-gray-200 ${
                  task.completed
                    ? "bg-green-100 dark:bg-green-200 dark:text-gray-700"
                    : "dark:text-white bg-white"
                }`}
              >
                <p
                  className={`text-base text-wrap max-[600px]:text-center w-[70%] font-medium cursor-grab
                  }`}
                >
                  {task.title}
                </p>
                <div className="flex space-x-2 max-[600px]:justify-between">
                  <button
                    onClick={() => handleMarkCompleted(task.id)}
                    className="text-green-500 hover:text-green-700 border-green-400 border p-2 rounded-lg hover:bg-green-300"
                  >
                    {task.completed ? (
                      <AiOutlineCheckCircle size={20} />
                    ) : (
                      "Mark Completed"
                    )}
                  </button>
                  <button
                    onClick={() => handleDeleteTask(task.id)}
                    className="text-red-500 hover:text-white hover:bg-red-400 rounded-md px-2"
                  >
                    <AiOutlineDelete size={20} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TaskList;
