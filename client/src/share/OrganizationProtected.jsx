import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate} from 'react-router-dom'
const OrganizationProtected = ({compo}) => {
    const {user} = useSelector(state => state.user)
    return <>
        {
            (user && user.role ==="organization") ? compo : <Navigate to='/organization' />
        }
    </>
}

export default OrganizationProtected
