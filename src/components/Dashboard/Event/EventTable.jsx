import React from "react";

// Dummy data
const dummyEvents = [
  {
    id: 1,
    name: "Event 1",
    date: "2024-01-22",
    location: "Venue A",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Event 2",
    date: "2024-01-23",
    location: "Venue B",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  // Add more dummy events as needed
];

// Your component rendering
return (
  <>
    <div className="w-full max-w-screen-xl mx-auto p-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <h2 className="text-2xl font-semibold mb-6 bg-blue-500 text-white p-4">
          Recent Events
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Event ID</th>
                <th className="py-2 px-4 border-b">Event Name</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Location</th>
                <th className="py-2 px-4 border-b">Description</th>
              </tr>
            </thead>
            <tbody>
              {dummyEvents.map((event) => (
                <tr key={event.id}>
                  <td className="py-2 px-4 border-b">{event.id}</td>
                  <td className="py-2 px-4 border-b">{event.name}</td>
                  <td className="py-2 px-4 border-b">{event.date}</td>
                  <td className="py-2 px-4 border-b">{event.location}</td>
                  <td className="py-2 px-4 border-b">{event.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </>
);
