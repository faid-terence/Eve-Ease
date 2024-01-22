import React from "react";
import Aside from "../components/Dashboard/Aside";
import EventTable from "../components/Dashboard/Event/EventsTable";
import { MyEvents } from "../components/Dashboard/Event/MyEvents";

const eventsData = [
  { id: 1, name: "Concert", date: "2024-02-15", location: "City Hall" },
  {
    id: 2,
    name: "Conference",
    date: "2024-03-10",
    location: "Conference Center",
  },
];

export const Dashboard = () => {
  return (
    <div className="flex">
      <Aside />
      <div className="flex-1">
       <MyEvents/>
      </div>
    </div>
  );
};
