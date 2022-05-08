import React, { Component, useState } from "react";

const LoginCard = (props) => {
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
    submitLogin,
  } = props;

  return (
    <form onSubmit={submitLogin}>
      <h3>Log In</h3>
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
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
    </form>
  );
};

export default LoginCard;
