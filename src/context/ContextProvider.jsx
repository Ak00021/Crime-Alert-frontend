import { useState } from "react";
import { AppContext } from "./context";

const AppContextProvider=({children})=>{
    const [sessionDetails,setSessionDetails]=useState({
        login:false,
        email:"",
        fullName:""
    })
    return(
        <AppContext.Provider value={{sessionDetails,setSessionDetails}}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider;