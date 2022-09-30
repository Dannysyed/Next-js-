import React from 'react'
import Adminpage from '../../components/minipages/adminpage/Admin'
import { useContext } from 'react';
import { NextResponse } from 'next/server'
import { useRouter } from 'next/router'
import Data_context from '../../store/context';
const Admin = () => {
    // let route = useRouter()
    // let con = useContext(Data_context)
    // if (con.islogged == false) {
    //     route.push('/login')
    // }
    return (
        <Adminpage></Adminpage>
    )
}

export default Admin