import React from "react";

export const EventForm = () => {
  return (
    <section>
      <div className="container mx-auto py-8 shadow-lg bg-white rounded-lg">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Create Event
        </h2>
        <form className="max-w-md mx-auto">
          <div className="section mb-8">
            <div className="section-title text-lg font-semibold text-blue-500 mb-4 border-b-2 pb-2">
              Event Information
            </div>
            <div className="form-group mb-4">
              <label htmlFor="eventName" className="block text-gray-600 mb-1">
                Event Name
              </label>
              <input
                type="text"
                id="eventName"
                name="eventName"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="form-group mb-4">
              <label
                htmlFor="eventDateTime"
                className="block text-gray-600 mb-1"
              >
                Date and Time
              </label>
              <input
                type="datetime-local"
                id="eventDateTime"
                name="eventDateTime"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="form-group mb-4">
              <label
                htmlFor="eventLocation"
                className="block text-gray-600 mb-1"
              >
                Location
              </label>
              <input
                type="text"
                id="eventLocation"
                name="eventLocation"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="form-group mb-4">
              <label
                htmlFor="eventDescription"
                className="block text-gray-600 mb-1"
              >
                Description
              </label>
              <textarea
                id="eventDescription"
                name="eventDescription"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                rows="4"
              ></textarea>
            </div>
          </div>

          <div className="section mb-8">
            <div className="section-title text-lg font-semibold text-blue-500 mb-4 border-b-2 pb-2">
              Organizer Information
            </div>
            <div className="form-group mb-4">
              <label
                htmlFor="organizerName"
                className="block text-gray-600 mb-1"
              >
                Organizer Name
              </label>
              <input
                type="text"
                id="organizerName"
                name="organizerName"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="form-group mb-4">
              <label
                htmlFor="organizerEmail"
                className="block text-gray-600 mb-1"
              >
                Organizer Email
              </label>
              <input
                type="email"
                id="organizerEmail"
                name="organizerEmail"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="form-group mb-4">
              <label
                htmlFor="organizerPhone"
                className="block text-gray-600 mb-1"
              >
                Organizer Phone
              </label>
              <input
                type="tel"
                id="organizerPhone"
                name="organizerPhone"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="section mb-8">
            <div className="section-title text-lg font-semibold text-blue-500 mb-4 border-b-2 pb-2">
              Ticketing Information
            </div>
            <div className="form-group mb-4">
              <label htmlFor="ticketPrice" className="block text-gray-600 mb-1">
                Ticket Price
              </label>
              <input
                type="text"
                id="ticketPrice"
                name="ticketPrice"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="form-group mb-4">
              <label
                htmlFor="ticketQuantity"
                className="block text-gray-600 mb-1"
              >
                Ticket Quantity
              </label>
              <input
                type="number"
                id="ticketQuantity"
                name="ticketQuantity"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Create Event
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EventForm;
