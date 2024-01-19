import React, { useState } from "react";

const CreateEventPage = () => {
  const [eventData, setEventData] = useState({
    eventName: "",
    eventDescription: "",
    eventDate: "",
    eventLocation: "",
  });

  const handleChange = (e) => {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle event creation or submission
    console.log("Event Data Submitted:", eventData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Create Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="eventName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Event Name
            </label>
            <input
              type="text"
              id="eventName"
              name="eventName"
              value={eventData.eventName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="eventDescription"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Event Description
            </label>
            <textarea
              id="eventDescription"
              name="eventDescription"
              value={eventData.eventDescription}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 border rounded"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="eventDate"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Event Date
            </label>
            <input
              type="date"
              id="eventDate"
              name="eventDate"
              value={eventData.eventDate}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="eventLocation"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Event Location
            </label>
            <input
              type="text"
              id="eventLocation"
              name="eventLocation"
              value={eventData.eventLocation}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEventPage;
