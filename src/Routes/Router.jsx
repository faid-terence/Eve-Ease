import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Event } from "../pages/Event";
import { Tickets } from "../pages/Tickets";
import { Contact } from "../pages/Contact";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/events" element={<Event />} />
      <Route path="/tickets" element={<Tickets />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
