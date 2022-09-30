import React, { useReducer, useState } from 'react'
import Data_context from './context'
const Routecontext = (props) => {
    let [loginstate, setlogin] = useState(false)
    let [tokenData, setTokenData] = useState('')

    let login = (data) => {
        // logindispatch({ type: "LoggedIn" })
        setlogin(true)
    }
    let token_rec = (data) => {
        setTokenData(data)
    }
    return (
        <Data_context.Provider value={{ islogged: loginstate, login: login, token: tokenData, token_rec: token_rec }}>
            {props.children}
        </Data_context.Provider>

    )
}

export default Routecontext