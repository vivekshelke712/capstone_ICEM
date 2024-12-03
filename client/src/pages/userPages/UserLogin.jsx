import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import * as yup from 'yup'
import {useSelector} from 'react-redux'
import {toast} from 'react-hot-toast'
import { useLoginMutation } from '../../redux/api/authApi'
import UserNavbar from '../../Component/userComponent/UserNavbar'
import Navbar from '../../Component/Navbar'
import Footer from '../../Component/Footer'
import { IoMdEye ,IoIosEyeOff} from "react-icons/io";

{/* <IoMdEye /> <IoIosEyeOff /> */}

const UserLogin = () => {
  const [showPassword, setShowPassword] = useState(true)
const[loginUser,{isSuccess,isError,error}]  =  useLoginMutation()
      const [loginData, setloginData] = useState({
        email:"",
        password:"",
        role:""
      })

      const handleChange = (e) => {
        const { name , value } = e.target 
        setloginData({...loginData,[name]:value})
      }
      const handleSubmit = e => {
        e.preventDefault()
        loginUser(loginData)

  }
  const navigate = useNavigate()
  const { user } = useSelector(state => state.user)
  useEffect(() => {
    if (user) {
      if (user.role === "user") {
       navigate("/user")
      }
      if (user.role === "organization") {
        navigate("/organization")
      }
      if (user.role === "admin") {
        navigate("/admin")
      }
   }
  }, [user])

  useEffect(() => {
    if (isSuccess) {
      toast.success("You are Logged in successfully")
    }
  },[isSuccess])
  useEffect(() => {
    if (isError) {
      toast.error(error.message || "Something went wrong Try again")
    }
  },[isError])
  
  
  return <>
      <Navbar />
     
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6"
            // onSubmit={formik.handleSubmit}
          >
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  // {...formik.getFieldProps("name")}
                  onChange={handleChange}
                  id="email"
                  name="email"
                  value={loginData.email}
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                onChange={handleChange}
                  // {...formik.getFieldProps('password')}
                  id="password"
                  name="password"
                  value={loginData.password}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
             
                {/* {
                  showPassword ? <IoMdEye onClick={setShowPassword(true)} /> : <IoIosEyeOff onClick={setShowPassword(false)} />
                 } */}
              
              
              </div>
            </div>

            {/* Role */}
              <div>
  <div className="flex items-center justify-between">
    <label htmlFor="role" className="block text-sm font-medium leading-6 text-gray-900">
      Select Role
    </label>
  </div>
  <div className="mt-2 w-full">
  <select className="select select-info w-full" name='role' onChange={handleChange} value={loginData.role}>
  <option disabled selected>Select language</option>
  <option value="user">user</option>
  <option value="organization">organization</option>
  <option value="admin">admin</option>
  {/* <option>Teacher</option> */}
</select>
  </div>
          </div>
          
            <div>
              <button
                onClick={handleSubmit}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link  to='/userRegister' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Sign Up
            </Link>
          </p>
        </div>
    </div>
    <Footer />
    </>
  
}

export default UserLogin
