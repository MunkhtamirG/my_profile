import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [profile, setProfile] = useState();
  useEffect(() => {
    fetch("/profile")
      .then((res) => res.json())
      .then((res) => {
        setProfile(res);
        console.log(res);
      });
  }, []);

  return (
    <div>
      <img src={profile?.img} className="profilePic" />
      <h2>Hello my name is {profile?.firstname}</h2>
      <p>I'm {profile?.major}</p>
    </div>
  );
}

export default App;
