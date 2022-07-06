import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [profile, setProfile] = useState();
  useEffect(() => {
    fetch("/profile")
      .then((res) => res.json())
      .then((res) => setProfile(res));
  }, []);

  return (
    <div>
      <img src={profile?.img} className="profilePic" />
      <h2>Hello my name is {profile?.firstname}</h2>
    </div>
  );
}

export default App;
