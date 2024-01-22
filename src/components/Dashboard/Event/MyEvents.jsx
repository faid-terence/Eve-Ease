import React from "react";
import EventTable from "./EventsTable";

const eventsData = [
  { id: 1, name: "Concert", date: "2024-02-15", location: "City Hall" },
  {
    id: 2,
    name: "Conference",
    date: "2024-03-10",
    location: "Conference Center",
  },
];

export const MyEvents = () => {
  return <EventTable events={eventsData} />;
};
