import React from "react";

export const Event = () => {
  return (
    <section>
      <div className="container text-center">
        <h2 className="heading">Find Events</h2>
        <div className="max-w-[570px] mt-[30px] mx-auto bg-[#CCF4B3] rounded-md flex items-center justify-between">
          <input
            type="search"
            className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
            placeholder="Search a Doctor"
          />
          <button className="btn mt-0 rounded-[0px] rounded-r-md">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};
