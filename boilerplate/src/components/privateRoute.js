import React from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'
import {useAuth} from '../context/authContext'

export default function PrivateRoute({children}) {
    const {currentUser} = useAuth();

    return currentUser ? children : <Navigate to='/SignIn'/>
}
