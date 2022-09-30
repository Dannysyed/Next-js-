import React from 'react'
import LoginPage from '../../components/minipages/loginpage/loginPage'
import { NextResponse } from 'next/server'
import { useRouter } from 'next/router'
const login = (req) => {
    let router = useRouter()
    let url = router.pathname
    return (

        <LoginPage url={url}></LoginPage>
    )
}

export default login