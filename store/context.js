import React from "react";
let Data_context = React.createContext(
    {
        islogged: false,
        login: () => { }
    }
)
export default Data_context