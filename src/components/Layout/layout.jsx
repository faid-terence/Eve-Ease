import React from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../Header/Header";
import { Router } from "../../Routes/Router";
import { Footer } from "../Footer/Footer";
import { HeroSlider } from "../Hero/HeroSLider";
import { Navbar } from "../Header/Navbar";

export const Layout = () => {
  const location = useLocation();
  const isHeaderVisible =
    location.pathname === "/" || location.pathname === "/home";

  return (
    <>
      {isHeaderVisible ? <Header /> : <Navbar />}

      <main>
        <Router />
      </main>
      <Footer />
    </>
  );
};
