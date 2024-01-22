import React from "react";

const EventTable = ({ events }) => {
  return (
    <div className="overflow-x-auto px-10 mt-[200px]">
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="py-3 px-4 text-left">Event Name</th>
            <th className="py-3 px-4 text-left">Date</th>
            <th className="py-3 px-4 text-left">Location</th>
            <th className="py-3 px-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr
              key={event.id}
              className="border-b border-gray-300 hover:bg-gray-100 transition-all duration-200"
            >
              <td className="py-3 px-4">{event.name}</td>
              <td className="py-3 px-4">{event.date}</td>
              <td className="py-3 px-4">{event.location}</td>
              <td className="py-3 px-4">
                <button className="bg-green-500 text-white px-3 py-1 rounded-md">
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventTable;
