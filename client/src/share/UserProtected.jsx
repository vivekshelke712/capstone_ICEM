import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate} from 'react-router-dom'
const UserProtected = ({compo}) => {
    const {user} = useSelector(state => state.user)
    return <>
        {
            (user && user.role ==="user") ? compo : <Navigate to='/' />
        }
    </>
}

export default UserProtected