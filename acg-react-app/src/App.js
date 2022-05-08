import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainScreen from "./screens/MainScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginScreen />} />
        <Route path="/sign-in" element={<LoginScreen />} />
        <Route path="/sign-up" element={<SignupScreen />} />
        <Route path="/home" element={<MainScreen />} />
      </Routes>
    </Router>
  );
}
export default App;
