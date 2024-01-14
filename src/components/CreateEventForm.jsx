import React from "react";

export const CreateEventForm = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <label className="text-lg font-bold text-gray-800">
              Event Title
            </label>
            <input
              type="text"
              placeholder="Event title"
              className="input-field"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label className="text-lg font-bold text-gray-800">Category</label>
            <select className="input-field">
              {/* Add options for categories */}
            </select>
          </div>

          <div className="flex flex-col gap-4">
            <label className="text-lg font-bold text-gray-800">
              Description
            </label>
            <textarea
              placeholder="Description"
              className="textarea rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label className="text-lg font-bold text-gray-800">Image URL</label>
            <input
              type="text"
              placeholder="Image URL"
              className="input-field"
            />
          </div>

          <div className="flex flex-col gap-4">
            <label className="text-lg font-bold text-gray-800">
              Event Location
            </label>
            <input
              type="text"
              placeholder="Event title"
              className="input-field"
            />
          </div>

          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <label className="text-lg font-bold text-gray-800">
                Start Date
              </label>
              <div className="flex-center h-[54px] overflow-hidden rounded-full bg-gray-50">
                <input type="datetime-local" className="input-field w-full" />
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <label className="text-lg font-bold text-gray-800">
                End Date
              </label>
              <div className="flex-center h-[54px] overflow-hidden rounded-full bg-gray-50">
                <input type="datetime-local" className="input-field w-full" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-col gap-4">
              <label className="text-lg font-bold text-gray-800">Price</label>
              <input
                type="text"
                placeholder="Event title"
                className="input-field"
              />
            </div>
            <div className="flex flex-col gap-4 w-full md:w-1/2 mt-3">
              <label className="text-lg font-bold text-gray-800">
                Free Ticket
              </label>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 h-5 w-5 border-2 border-primary-500"
                />
                <span className="text-gray-700">Offering Free Tickets</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <label className="text-lg font-bold text-gray-800">URL</label>
            <div className="flex-center h-[54px] overflow-hidden rounded-full bg-gray-50 px-4 py-2">
              <input
                type="text"
                placeholder="URL"
                className="input-field w-full"
              />
            </div>
          </div>

          <button type="submit" className="btn">
            Submit Event
          </button>
        </form>
      </div>
    </section>
  );
};
