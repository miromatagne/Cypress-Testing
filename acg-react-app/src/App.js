import React, { createContext, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainScreen from "./screens/MainScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import { onAuthStateChanged } from "firebase/auth";
import { globalStateContext } from "./context";
import { auth } from "./firebase";

function App() {
  const [activeUser, setActiveUser] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user.uid);
      console.log(user.email);
      setActiveUser(user);
    }
  });

  return (
    <globalStateContext.Provider value={activeUser}>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginScreen />} />
          <Route path="/sign-in" element={<LoginScreen />} />
          <Route path="/sign-up" element={<SignupScreen />} />
          <Route path="/home" element={<MainScreen />} />
        </Routes>
      </Router>
    </globalStateContext.Provider>
  );
}
export default App;
