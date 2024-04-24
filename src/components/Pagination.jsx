// Pagination.js
import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';


const Pagination = () => {
  const { currentPage, tasksPerPage, totalTasks, paginate ,indexOfFirstTask ,indexOfLastTask } = useContext(TaskContext);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTasks / tasksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="flex justify-center flex-wrap mb-4">
        <button
          disabled={currentPage === 1}
          onClick={() => paginate(currentPage - 1)}
          className={`px-3 py-2 mr-2 mb-2 rounded-md ${
            currentPage === 1
              ? 'bg-gray-300 text-gray-500'
              : 'bg-indigo-700 text-white hover:bg-indigo-800'
          }`}
        >
          Previous
        </button>
        <div className="flex flex-wrap justify-center">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`px-3 py-2 mx-1 mb-2 rounded-md ${
                currentPage === number
                  ? 'bg-indigo-700 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {number}
            </button>
          ))}
        </div>
        <button
          disabled={currentPage === pageNumbers.length}
          onClick={() => paginate(currentPage + 1)}
          className={`px-3 py-2 ml-2 mb-2 rounded-md ${
            currentPage === pageNumbers.length
              ? 'bg-gray-300 text-gray-500'
              : 'bg-indigo-700 text-white hover:bg-indigo-800'
          }`}
        >
          Next
        </button>
      </div>
      <p className="text-sm text-white">
        Showing {indexOfFirstTask + 1} to{' '}
        {indexOfLastTask > totalTasks ? totalTasks : indexOfLastTask} of {totalTasks}{' '}
        tasks
      </p>
    </div>
  );
};

export default Pagination;