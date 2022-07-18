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
  const [profileData, setProfileData] = useState();
  useEffect(() => {
    fetch("/profile")
      .then((e) => e.json())
      .then((res) => {
        setProfileData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header profileData={profileData} />
      <Nav profileData={profileData} />
      <About profileData={profileData} />
      <Experience profileData={profileData} />
      <Services profileData={profileData} />
      <Contact profileData={profileData} />
      <Footer profileData={profileData} />
    </>
  );
}
