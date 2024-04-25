import React from "react";

const Loader = () => {
  let circleCommonClasses = "h-10  w-10 bg-current rounded-full bg-indigo-300";

  return (
    <div className="flex-col items-center justify-center">
      <div className="flex align-center justify-center mt-10">
        <div className={` ${circleCommonClasses} mr-1  animate-bounce`}></div>
        <div className={`${circleCommonClasses} mr-1 animate-bounce-200`}></div>
        <div className={`${circleCommonClasses} mr-1 animate-bounce-400`}></div>
      </div>
      <h1 className="text-indigo-300 mt-10 text-3xl">Fetching data</h1>
    </div>
  );
};

export default Loader;
