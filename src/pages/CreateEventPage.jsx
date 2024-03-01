import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsArrowBarDown } from "react-icons/bs";

const CreateEventPage = () => {
  const [eventData, setEventData] = useState({
    eventName: "",
    eventDescription: "",
    eventDate: "",
    eventLocation: "",
    eventVenue: "",
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
    <div className="flex w-full max-w-5xl mx-auto my-[140px]">
      <div className="w-1/4 p-4">
  {/* Stepper */}
  <div className="flex flex-col space-y-10">
    <div className="text-lg font-semibold">
      Step 1: Event Information
    </div>
    {/* Add more steps as needed */}

    <div className="flex items-center text-gray-800">
      <BsArrowBarDown className="text-2xl" />
    </div>

    <div className="text-lg font-semibold">
      Step 2: Ticket Information
    </div>

    <div className="flex items-center text-gray-800">
      <BsArrowBarDown className="text-2xl" />
    </div>

    <div className="text-lg font-semibold">
      Step 3: Submission
    </div>
  </div>
</div>

      <div className="w-3/4 p-4">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-3xl mb-6 font-bold text-center text-gray-800">
            Create Event
          </h2>
          <form id="eventForm" onSubmit={handleSubmit} className="space-y-6">
            <div className="mb-6">
              <div className="text-lg text-gray-700 font-semibold">
                Event Information
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="eventName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Event Name
                  </label>
                  <input
                    type="text"
                    id="eventName"
                    name="eventName"
                    required
                    onChange={handleChange}
                    value={eventData.eventName}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="eventDateTime"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date and Time
                  </label>
                  <input
                    type="datetime-local"
                    id="eventDateTime"
                    name="eventDateTime"
                    required
                    onChange={handleChange}
                    value={eventData.eventDateTime}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="eventDescription"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="eventDescription"
                  name="eventDescription"
                  onChange={handleChange}
                  value={eventData.eventDescription}
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  rows="3"
                ></textarea>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="eventLocation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    id="eventLocation"
                    name="eventLocation"
                    onChange={handleChange}
                    value={eventData.eventLocation}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="eventVenue"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Venue
                  </label>
                  <input
                    type="text"
                    id="eventVenue"
                    name="eventVenue"
                    onChange={handleChange}
                    value={eventData.eventVenue}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="relative w-[430px] h-[50px]">
                <input
                  type="file"
                  name="photo"
                  id="customFile"
                  accept=".jpg, .png, .jpeg"
                  className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                />
                <label
                  htmlFor="customFile"
                  className="absolute top-0 left-0 w-full flex items-center px-[0.75rem] py-[0.75rem] text-[15px] leading-6 overflow-hidden bg-[#CCF4B3] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
                >
                  Add Event Image
                </label>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="btn text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Create Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEventPage;
