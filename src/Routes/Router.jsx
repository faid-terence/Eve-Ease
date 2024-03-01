import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Event } from "../pages/Event";
import { Tickets } from "../pages/Tickets";
import { Contact } from "../pages/Contact";
import { SignUp } from "../pages/SignUp";
import { Login } from "../pages/Login";
import { EventDetails } from "../pages/EventDetails";
import { CreateEventForm } from "../components/CreateEventForm";
import CreateEventPage from "../pages/CreateEventPage";
import MyTicketsPage from "../components/Tickets/MyTickets";
import { Dashboard } from "../pages/Dashboard";
import CreateEVentForm from "../components/Dashboard/Event/CreateEVentPage";
import { EventForm } from "../components/Event/EventForm";
import { PaymentDashboard } from "../pages/PaymentDashboard";
import { PopUp } from "../components/POPUPS/PopUp";
import { Verify } from "../components/Email/Verify";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/events" element={<Event />} />
      <Route path="/events/:id" element={<EventDetails />} />
      <Route path="/tickets" element={<MyTicketsPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/auth/signin" element={<Login />} />
      <Route path="/auth/register" element={<SignUp />} />
      <Route path="/create-event" element={<CreateEventPage />} />
      <Route path="/my-events" element={<Dashboard />} />
      <Route path="/payments" element={<PaymentDashboard />} />
      <Route
        path="/verify-email"
        element={
          <PopUp
            title="Success"
            description="Please check your email for a verification link to complete your account setup."
          />
        }
      />
      <Route path="/email-verified" element={<Verify />} />
    </Routes>
  );
};
