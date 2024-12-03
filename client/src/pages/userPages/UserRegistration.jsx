// import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import Navbar from '../../Component/Navbar'
import Footer from '../../Component/Footer'
import {useNavigate} from 'react-router-dom'
import { useRegisterMutation } from '../../redux/api/authApi'
import {toast} from 'react-hot-toast'
// import user from '../../../../server/models/user'

const UserRegistration = () => {
 const [register,{isSuccess,isError,error}] =  useRegisterMutation()
  const [userData, setUserData] = useState({
    name:"",
    email:"",
    number:"",
    password:"",
    role:"user"
  })

  const handleChange = (e) => {
    const {name,value} = e.target
    setUserData({...userData,[name]:value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    register(userData)
  }
  const navigate = useNavigate()
  useEffect(() => {
    if (isSuccess) {
      toast.success('Registered Successfully')

      navigate('/userLogin')
    }
  }, [isSuccess])
  

    
  return <>
    <Navbar />
<div className="flex items-center justify-center min-h-screen px-6 py-12 lg:px-8">
  <div className="sm:w-full sm:max-w-md">
    <h2 className=" mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
      Create Your Account
    </h2>

    <form className="mt-8 space-y-6" >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
            Your Name
          </label>
          <div className="">
                <input
                  onChange={handleChange}
              id="name"
                  name="name"
                  value={userData.name}
              type="text"
              autoComplete="name"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Your Email Address
          </label>
          <div className="mt-2">
                <input
                 onChange={handleChange} 
              id="email"
                  name="email"
                  value={userData.email}
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
            Mobile Number
          </label>
          <div className="mt-2">
                <input
                  onChange={handleChange}
              id="phone"
                  name="number"
                  value={userData.number}
              type="tel"
              autoComplete="tel"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        

        <div>
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
            Password
          </label>
          <div className="mt-2">
                <input
                 onChange={handleChange}
              id="password"
                  name="password"
                  value={userData.password}
              type="password"
              autoComplete="new-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
            Role
          </label>
          <div className="mt-2">
            <select
              id="role"
              onChange={handleChange}
              name="role"
              value={userData.role}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="" disabled>Select role</option>
              <option value="user">user</option>
              <option value="organization">organization</option>
            </select>
          </div>
        
        </div>
      </div>

      <div>
        <button
          // type="submit"
          onClick={handleSubmit}
          className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Create an Account
        </button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      Already have an account?{' '}
      <Link to='/userLogin' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
        Log in here
      </Link>
    </p>
  </div>
</div>
{
  // <pre>{JSON.stringify(userData)}</pre>
}
<Footer />






  </>
}

export default UserRegistration
