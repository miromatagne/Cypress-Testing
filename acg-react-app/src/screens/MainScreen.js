import { signOut } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { globalStateContext } from "../context";
import { auth } from "../firebase";

const MainScreen = () => {
  const [redirect, setRedirect] = useState(false);
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("Logged out");
        setRedirect(true);
      })
      .catch((err) => console.log(err));
  };

  const user = useContext(globalStateContext);

  return (
    <div>
      {redirect ? <Navigate to="/sign-in" /> : <></>}
      <div>{user.email}</div>
      <button className="btn btn-primary" id="logout-button" onClick={logout}>
        Log Out
      </button>
    </div>
  );
};

export default MainScreen;
