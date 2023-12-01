import React from "react";
import { Route, Routes } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./Styles.css";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Service from "./Routes/Service";
import About from "./Routes/About";
import Signup from "./Components/Signup";

export default function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Navbar />
        <Home />
        <About />
        <Service />
        <Contact />
        <Signup />
        <Helmet>
          <title>your journey  your story</title>
        </Helmet>
      </div>
    </HelmetProvider>
  );
}
