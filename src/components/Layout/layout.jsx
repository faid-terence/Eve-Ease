import React from "react";
import { Header } from "../Header/Header";
import { Router } from "../../Routes/Router";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Router />
      </main>
    </>
  );
};
