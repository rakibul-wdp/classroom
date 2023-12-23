import React, { useState } from "react";
import DisplayContext from "./DisplayContext";

const DisplayContextProvider = ({ children }) => {
  const [grouping, setGrouping] = useState("status");
  const [ordering, setOrdering] = useState("priority");
  return (
    <DisplayContext.Provider
      value={{ grouping, setGrouping, ordering, setOrdering }}
    >
      {children}
    </DisplayContext.Provider>
  );
};

export default DisplayContextProvider;
