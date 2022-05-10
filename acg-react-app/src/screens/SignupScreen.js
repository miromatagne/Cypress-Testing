import React, { useState } from "react";
import SignupCard from "../components/SignupCard";
import { Link, Navigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const SignupScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [redirect, setRedirect] = useState(false);

  const validate = () => {
    var valid = true;
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,99}$/i.test(email)) {
      setErrorMessage("The email address is invalid");
      valid = false;
    } else if (password === "") {
      setErrorMessage("The password is invalid");
      valid = false;
    }
    return valid;
  };

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const submitSignup = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    if (!validate()) {
      setError(true);
      return;
    }
    register();
    setRedirect(true);
  };

  return (
    <div className="App">
      {redirect ? <Navigate to="/home" /> : <></>}
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>
            ACG
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <SignupCard
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            error={error}
            setError={setError}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
            validate={validate}
            submitSignup={submitSignup}
          />
        </div>
      </div>
    </div>
  );
};

export default SignupScreen;
