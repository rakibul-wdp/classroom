import { createContext, useState } from "react";

export const AppContext = createContext();

export const Provider = ({ children }) => {
  const [conditions, setConditions] = useState({});
  const [finalValues, setFinalValues] = useState({});

  return (
    <AppContext.Provider
      value={{
        conditions,
        setConditions,
        finalValues,
        setFinalValues,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
