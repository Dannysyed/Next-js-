import React, { useReducer, useState } from 'react'
import Data_context from './context'
let defaul_state = {
    logged: false
}
let loginreducer = (state, action) => {
    if (action.type == "LoggedIn") {
        state.logged = true
    }
    if (action.type == "LoggedOut") {
        state.logged = false
    }
}
const Routecontext = (props) => {

    // let [loginstate, logindispatch] = useReducer(loginreducer, defaul_state)
    let [loginstate, setlogin] = useState(false)
    let login = (data) => {
        // logindispatch({ type: "LoggedIn" })
        setlogin(true)
    }
    return (
        <Data_context.Provider value={{ islogged: loginstate, login: login }}>
            {props.children}
        </Data_context.Provider>

    )
}

export default Routecontext