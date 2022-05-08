import React, { Component, useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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

  const submitLogin = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    if (!validate()) {
      setError(true);
      return;
    }
    return;
  };

  return (
    <form onSubmit={submitLogin}>
      <h3>Log In</h3>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>
      {error ? (
        <div
          style={{
            display: "flex",
            color: "red",
            fontSize: 13,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          {errorMessage}
        </div>
      ) : (
        <></>
      )}
      <div className="d-grid" style={{ paddingTop: 5 }}>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
    </form>
  );
};

export default Login;
