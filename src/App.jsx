import { useContext, useEffect, useState } from "react";
import "./App.css";

import TaskList from "./components/TaskList";
import Navbar from "./components/Navbar";

import AddTaskModal from "./components/AddTaskModal";
import BackToTopButton from "./components/BackToTopButton";
import { DarkModeContext, DarkModeProvider } from "./context/DarkModeContext";
import { TaskProvider } from "./context/TaskContext";

function App() {
  const [isModal , setIsModal]= useState(false);
  const modalCloseHandler = ()=>{
    setIsModal(false);
  }

  return ( 
    <TaskProvider>
      <div className="overflow-hidden overflow-y-scroll h-screen transition-colors duration-500 dark:bg-slate-700">
        <Navbar setIsModal = {setIsModal}/>
        <AddTaskModal onClose={modalCloseHandler} isOpen={isModal} />
        <TaskList />
        <BackToTopButton />
      </div>
      </TaskProvider>
    
  );
}

export default App;
