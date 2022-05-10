import React, { useContext } from "react";
import { globalStateContext } from "../context";

const MainScreen = () => {
  const user = useContext(globalStateContext);

  return <div>{user.uid}</div>;
};

export default MainScreen;
