import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { verificationTokenHandler } from '../../api/api'

const ProtectedRoute = ({ children }) => {
    let token = localStorage.getItem('token')
    if (!token) {
        return <Navigate to="/login" />
    }

    const handler = async () =>{
        const token = localStorage.getItem('token')
        const resp = await verificationTokenHandler(token)
        if(resp.status == 400){
            localStorage.removeItem('token')
            return <Navigate to="/login" />
        }
    }

    useEffect(() => {
        handler()
    }, [])

    return children
}

export default ProtectedRoute