import React from "react";
import Context from "./ThemeContext";

const ContextProvider = ({children}) =>{
    const [theme,setTheme] = React.useState(null)
    return (
        <Context.Provider value={{theme,setTheme}}>
          {children}  
        </Context.Provider>
    )
}

export default ContextProvider;
