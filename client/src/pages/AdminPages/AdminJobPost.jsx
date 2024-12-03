import React, { useEffect, useState } from 'react';
import AdminNavbar from '../../Component/adminComponent/AdminNavbar';
import { useAddjobMutation } from '../../redux/api/adminApi';
import {toast} from 'react-hot-toast'

const AdminJobPost = () => {
    const [postJob ,{isSuccess}] = useAddjobMutation()  
  const [jobData, setJobData] = useState({
        jobTitle: '',
        jobRole: '',
        experience: '',
        jobDesc: '',
        salary: '',
        location: '',
        skills: ''
  });
  
  const handleChange = e => {
    const { name, value } = e.target
    setJobData({...jobData,[name]:value})
  }
  const handleSubmit = e => {
    e.preventDefault()
    postJob(jobData)
  }
useEffect(() => {
  if (isSuccess) {
    toast.success("Job Added Successfully")
    
  }
}, [isSuccess])

    return <>
        {/* <AdminNavbar /> */}
        <form class="max-w-md mx-auto">
  <div class="relative z-0 w-full mb-5 group">
    <input 
        type="text" 
        name="jobTitle" 
        id="floating_jobTitle" 
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        placeholder=" " 
        required 
        value={jobData.jobTitle}
        onChange={handleChange}
    />
    <label 
        for="floating_jobTitle" 
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
        Enter Job Title 
    </label>
</div>
<div class="relative z-0 w-full mb-5 group">
    <input 
        type="text" 
        name="company" 
        id="floating_jobRole" 
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        placeholder=" " 
        required 
        value={jobData.company}
        onChange={handleChange}
    />
    <label 
        for="floating_jobRole" 
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
        Enter Company Name
    </label>
</div>
<div class="relative z-0 w-full mb-5 group">
    <input 
        type="text" 
        name="experience" 
        id="floating_experience" 
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        placeholder=" " 
        required 
        value={jobData.experience}
        onChange={handleChange}
    />
    <label 
        for="floating_experience" 
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
        Enter Required Experience in Years
    </label>
</div>
<div class="relative z-0 w-full mb-5 group">
    <textarea 
        type="text" 
        name="jobDesc" 
        id="floating_jobDesc" 
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        placeholder=" " 
        required 
        value={jobData.jobDesc}
        onChange={handleChange}
    />
    <label 
        for="floating_jobDesc" 
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
        Enter Job Description
    </label>
</div>
<div class="relative z-0 w-full mb-5 group">
    <input 
        type="text" 
        name="salary" 
        id="floating_salary" 
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        placeholder=" " 
        required 
        value={jobData.salary}
        onChange={handleChange}
    />
    <label 
        for="floating_salary" 
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
        Enter Salary
    </label>
</div>
<div class="relative z-0 w-full mb-5 group">
    <input 
        type="text" 
        name="location" 
        id="floating_location" 
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        placeholder=" " 
        required 
        value={jobData.location}
        onChange={handleChange}
    />
    <label 
        for="floating_location" 
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
        Enter Location
    </label>
</div>
<div class="relative z-0 w-full mb-5 group">
    <input 
        type="text" 
        name="skills" 
        id="floating_skills" 
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        placeholder=" " 
        required 
        value={jobData.skills}
        onChange={handleChange}
    />
    <label 
        for="floating_skills" 
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
        Enter Required Skills
    </label>
</div>

  
     
     
            
  
  <button type="button" onClick={handleSubmit} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
    </>
};

export default AdminJobPost;
