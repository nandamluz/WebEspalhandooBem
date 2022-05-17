import React, { createContext, useState } from "react";



const Context = createContext(null);

export function ContextProvider(props) {
    const [user, setUser] = useState({name:"", email:""})

    function saveUser(userprops) {
      localStorage.setItem("user", JSON.stringify(userprops))
      setUser(userprops)
    }

    return(
      <Context.Provider 
        value={{
          user,
          setUser: saveUser
         }}
        >
            {props.children}
        </Context.Provider>
    )
}


export default Context;