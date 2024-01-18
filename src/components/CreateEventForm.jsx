import React from "react";
import profile from "../assets/terence 1.png";

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

    // <section>
    //   <div className="container">
    //     <div className="relative mt-10 mb-6 shadow-lg w-[90%]">
    //       <p className="font-medium mb-2 inline-block">Admin User Management</p>
    //       <div className="w-full pb-2 overflow-x-auto">
    //         <table className="font-light w-full">
    //           <thead className="bg-blue-200">
    //             <tr>
    //               <th className="w-32 text-start font-bold px-6 py-1 capitalize">
    //                 Account Status
    //               </th>
    //               <th className="w-32 text-start font-bold px-6 py-1 capitalize">
    //                 User Name
    //               </th>
    //               <th className="w-32 text-start font-bold px-6 py-1 capitalize">
    //                 User Email
    //               </th>
    //               <th className="w-32 text-start font-bold px-6 py-1">
    //                 User Role
    //               </th>
    //               <th className="w-32 text-start font-bold px-6 py-1">
    //                 Action
    //               </th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             <tr>
    //               <td className="w-32 text-start px-6 py-1">
    //                 <button className="bg-customBlue hover:bg-customBlue text-white font-bold py-1 px-6 rounded-lg capitalize">
    //                   Active
    //                 </button>
    //               </td>

    //               <td className="w-48 font-light py-4 rounded-lg flex items-center">
    //                 <img
    //                   src={profile}
    //                   alt="User"
    //                   className="w-8 h-8 mr-2 rounded-full"
    //                 />
    //                 John Doe{" "}
    //               </td>

    //               <td className="w-48 text-start font-light px-6 py-1">
    //                 john.doe@example.com{" "}
    //               </td>
    //               <td className="w-48 text-start font-light px-6 py-1">
    //                 Admin
    //               </td>
    //               <td className="w-32 text-start font-light px-6 py-1">
    //                 <div className="symbols flex justify-between">
    //                   <i className="material-symbols-rounded cursor-pointer text-customBlue-500">
    //                     visibility
    //                   </i>
    //                   <i className="update material-symbols-rounded cursor-pointer text-orange-500">
    //                     edit
    //                   </i>
    //                   <i className="material-symbols-rounded cursor-pointer text-red-500">
    //                     delete_forever
    //                   </i>
    //                   <i className="material-symbols-rounded cursor-pointer">
    //                     manage_accounts
    //                   </i>
    //                 </div>
    //               </td>
    //             </tr>
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};
