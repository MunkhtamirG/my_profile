import React from "react";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { useState, useEffect } from "react";

export default function App() {
  // useEffect(() => {
  //   fetch("http://localhost:3001/profile")
  //     .then((e) => console.log(e))
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
