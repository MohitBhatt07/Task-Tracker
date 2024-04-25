import React, { useContext, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { toast } from "react-toastify";
import { DarkModeContext } from "../context/DarkModeContext";
import { TaskContext } from "../context/TaskContext";

const AddTaskModal = ({ isOpen, onClose}) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const {addTask} = useContext(TaskContext);
  const handleAddTask = (event)=>{
    event.preventDefault();
    if(newTaskTitle.trim()){
      addTask(newTaskTitle);
      setNewTaskTitle("");
      onClose();
      toast.success("Task added successfully");
    }
    else{
      toast.error("input some title");
    }
  }
  const handleOutsideClick = (event) => {
    if (!event.target.closest(".modal-content")) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0 bg-gray-900 bg-opacity-50 transition-all duration-300 ease-in-out transform ${
        isOpen ? "opacity-100 translate-y-0" : "-translate-y-full"
      }`}
      onClick={handleOutsideClick}
    >
      <div className="relative mx-auto w-full max-w-sm bg-white rounded-lg shadow-lg">
        <div className="xyzz modal-content flex justify-between items-center p-4 border-b border-gray-200">
          <h3 className="text-xl font-medium text-gray-900">Add New Task</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-6 modal-content">
          {" "}
          {/* Added modal-content class */}
          <form onSubmit={handleAddTask}>
            <div className="mb-4">
              <label
                htmlFor="newTaskTitle"
                className="block text-sm font-medium text-gray-700"
              >
                Task Title
              </label>
              <input
                type="text"
                id="newTaskTitle"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center items-center px-4 py-2 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              Add Task
              <AiOutlinePlus className="ml-2" size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
