import React, { useContext, useEffect, useState } from 'react'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { AiOutlineCheckCircle, AiOutlineDelete , AiOutlineDrag } from "react-icons/ai";
import { TaskContext } from '../context/TaskContext';
import Loader from './Loader';


const DropComponent = ({tasks }) => {
  const {  deleteTask :handleDeleteTask, isLoading ,toggleTaskCompletion :handleMarkCompleted } = useContext(TaskContext);

  const [enabled , setEnabled ]=  useState(false);
  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }
  return (
    isLoading ? <Loader/> :<Droppable droppableId="task-list">
        {(provided) => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex w-4/5 bg-purple-800 dark:bg-indigo-900 dark:shadow-xl dark:shadow-slate-400 flex-col space-y-2 p-4  rounded-md overflow-hidden shadow-md" 
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                {(provided, snapshot) => (
                  <li
                   {...provided.draggableProps}
                  {...provided.dragHandleProps} 
                    ref={provided.innerRef}
                    className={`task min-h-30 dark:bg-gray-800 px-4 py-2  dark:hover:text-black dark:hover:bg-gray-200 flex justify-between items-center rounded-md max-[600px]:flex-col max-[600px]:gap-2 hover:bg-gray-200  ${
                      task.completed ? "bg-green-100 dark:bg-green-200 dark:text-gray-700"  : "dark:text-white bg-white"
                    } ${
                      snapshot.isDragging
                        ? "bg-orange-300 dark:bg-orange-200 dark:text-gray-600 shadow-lg "
                        : ""
                    }`}
                  >
                    <p
                      className={`text-base text-wrap max-[600px]:text-center w-[70%] font-medium cursor-grab ${
                        snapshot.isDragging ? "text-opacity-75" : ""
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
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
  )
}

export default DropComponent