import React, { Component, useState } from "react";

const SignupCard = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    setError,
    errorMessage,
    setErrorMessage,
    validate,
    submitSignup,
  } = props;

  return (
    <form onSubmit={submitSignup}>
      <h3>Sign Up</h3>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="text"
          id="email-input"
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
          id="password-input"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error ? (
        <div
          id="error-message"
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
        <button type="submit" className="btn btn-primary" id="submit-button">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignupCard;
