import React from 'react'
import { useSelector } from 'react-redux'
import {Navigate,Outlet} from 'react-router-dom'

function AuthLayout({authentication}){
    const status=useSelector((state)=>state.auth.status)

    if(authentication  && !status){
        return <Navigate to='/login' replace/>
    }

    if(!authentication && status){
        return <Navigate to='/'replace />
    }

    return <Outlet/>
}

export default AuthLayout;