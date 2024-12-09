import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate} from 'react-router-dom'
const OrganizationProtected = ({compo}) => {
    const {org} = useSelector(state => state.org)
    return <>
        {
            (org && org.role ==="organization") ? compo : <Navigate to='/' />
        }
    </>
}

export default OrganizationProtected
