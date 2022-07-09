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
  const [profile, getProfile] = useState();
  useEffect(() => {
    fetch("/profile")
      .then((res) => res.json())
      .then((res) => getProfile(res));
  }, []);
  return (
    <>
      <Header profile={profile} />
      <Nav profile={profile} />
      <About profile={profile} />
      <Experience profile={profile} />
      <Services profile={profile} />
      <Contact profile={profile} />
      <Footer profile={profile} />
    </>
  );
}
