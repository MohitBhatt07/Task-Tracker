import React, { useState, useCallback, useEffect, useContext } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import DropComponent from "./DropComponent";
import { toast } from "react-toastify";
import TaskFilter from "./TaskFilter";
import { DarkModeContext } from "../context/DarkModeContext";
import { TaskContext } from "../context/TaskContext";

function TaskList() {

  const { handleOnDragEnd } = useContext(TaskContext);
  return (
    <div className="mt-24 flex-col justify-center items-center space-y-4 w-screen">
      <h1 className="bg-indigo-700 text-white w-fit m-auto px-5 rounded-lg shadow-lg shadow-cyan-200 text-3xl font-serif ml-10">
        TASK LIST
      </h1>
      <TaskFilter/>
      <div className="drag-drop flex justify-center items-center w-screen">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <DropComponent
            
          />
        </DragDropContext>
      </div>
    </div>
  );
}

export default TaskList;
