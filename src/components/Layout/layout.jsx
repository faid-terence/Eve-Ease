import React from "react";
import { Header } from "../Header/Header";
import { Router } from "../../Routes/Router";
import { Footer } from "../Footer/Footer";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </>
  );
};
