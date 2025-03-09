import React, { useState, useEffect } from "react";
import "./App.css";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Home from "./components/Home";

function App() {
  const [user, setUser] = useState({
    name: "Vince Johnrem Aranas",
    settings: {
      darkMode: false,
    },
  });

  useEffect(() => {
    if (user.settings.darkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [user.settings.darkMode]);

  const handleNameChange = (e) => {
    setUser({
      ...user,
      name: e.target.value,
    });
  };

  const toggleDarkMode = () => {
    setUser((prevUser) => ({
      ...prevUser,
      settings: {
        ...prevUser.settings,
        darkMode: !prevUser.settings.darkMode,
      },
    }));
  };

  return (
    <div>
      <Home />
      <Profile user={user} onNameChange={handleNameChange} />
      <Settings
        darkMode={user.settings.darkMode}
        toggleDarkMode={toggleDarkMode}
      />
    </div>
  );
}

export default App;
