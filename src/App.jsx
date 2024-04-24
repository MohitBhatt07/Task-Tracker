import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import { toast } from "react-toastify";
import TaskList from "./components/TaskList";
import Navbar from "./components/Navbar";
import Modal from "./components/AddTaskModal";
import ModalSheet from "./components/AddTaskModal";
import AddTaskModal from "./components/AddTaskModal";
import BackToTopButton from "./components/BackToTopButton";
import { DarkModeContext, DarkModeProvider } from "./context/DarkModeContext";
import Pagination from "./components/Pagination";

function App() {
  const { isDarkMode } = useContext(DarkModeContext);
  const [isModal , setIsModal]= useState(false);


  const modalCloseHandler = ()=>{
    setIsModal(false);
  }

  return ( 
      <div className="overflow-hidden overflow-y-scroll h-screen dark:bg-slate-700">
        <Navbar setIsModal = {setIsModal}/>
        <AddTaskModal onClose={modalCloseHandler} isOpen={isModal} />
        <TaskList />
        <Pagination />
        <BackToTopButton />
      </div>
    
  );
}

export default App;
