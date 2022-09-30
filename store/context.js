import React from "react";
let Data_context = React.createContext(
    {
        islogged: false,
        login: () => { },
        token: '',
        token_rec: () => { }
    }
)
export default Data_context