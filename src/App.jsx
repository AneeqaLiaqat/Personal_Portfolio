import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import CardsCategory from "./components/CardsCategory";
import { Toaster } from "react-hot-toast";

const App = () => {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/category/");
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div className="w-full flex flex-col gap-28 lg:gap-30 min-h-screen max-w-[1300px] mx-auto p-6">
      <Toaster position="bottom-right" />
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="#">
                <Home />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="portfolio">
                <Portfolio />
              </section>
              <section id="contact">
                <Contact />
              </section>
            </>
          }
        />
        <Route path="/category/:category" element={<CardsCategory />} />
      </Routes>
    </div>
  );
};

export default App;
