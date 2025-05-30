import React from "react";

function Todoapp() {
  return (
    <>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-amber-400 text-sm py-3">
        <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
          <a
            className=" text-5xl font-bold  text-black "
            href="https://dictionary.cambridge.org/dictionary/english/to-do-list#:~:text=a%20list%20of%20the%20tasks,to%2Ddo%20list%20as%20possible."
            aria-label="Brand"
          >
            To<a className="font-extrabold font">.</a>Do
          </a>
          <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
            <a className="text-4xl text-blue-600" href="#" aria-current="page">
              Home
            </a>
            <a className="text-4xl text-blue-600" href="#">
              Options
            </a>
            <a className="text-4xl text-blue-600" href="#">
              Abouts
            </a>
            <a className="text-4xl text-blue-600" href="#">
              Enquiry
            </a>
          </div>
        </nav>
      </header>
      <h1 className="font-bold from-cyan-600 text-6xl text-center m-10 p-10 inset-ring-amber-300 bg-amber-900">
        To-Do List
      </h1>
      <div className="table-row"></div>
    </>
  );
}

export default Todoapp;
