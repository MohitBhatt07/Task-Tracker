import React, { useContext, useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { TaskContext } from '../context/TaskContext';

const TaskFilter = () => {

  const { filterOption, handleFilterChange } = useContext(TaskContext);

  return (
      <div className="flex items-center justify-center mb-4">
        <button
          className={`flex items-center px-4 py-2 rounded-l-md ${filterOption === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => handleFilterChange('all')}
        >
          All
        </button>
        <button
          className={`flex items-center px-4 py-2 ${filterOption === 'completed' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => handleFilterChange('completed')}
        >
          <FaCheck className="mr-2" /> Completed
        </button>
        <button
          className={`flex items-center px-4 py-2 rounded-r-md ${filterOption === 'incomplete' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => handleFilterChange('incomplete')}
        >
          <FaTimes className="mr-2" /> Incomplete
        </button>
      </div>

  );
};

export default TaskFilter;