import React from 'react'
import Navbar from '../../Component/Navbar'
import Footer from '../../Component/Footer'
import developer from '../../assets/developer.jpeg'
import guide from '../../assets/guide.jpeg'
import ceo from '../../assets/ceo.jpeg'
import team from '../../assets/team.jpg'
const About = () => {
    const teamMembers = [
        {
          name: 'Vivek Shelke',
          role: 'Cofounder, Developer',
          image: developer 
        },
        {
          name: 'Pratik Ronge',
          role: 'Founder and  create Ceo',
          image: ceo, 
        },
        // {
        //   name: 'Pratik Ronge',
        //   role: 'Founder and Ceo',
        //   image: ceo, 
        // },
        // {
        //   name: 'Hetal Thaker',
        //   role: 'Project Guide',
        //   image: guide, 
        // },
        
      ];
    return <>
        {/* <Navbar /> */}
        
        <div className="bg-gray-50 p-8">
      {/* Header Section */}
      <section className="text-center mb-10">
        <p className="text-sm uppercase tracking-wider text-gray-500">Know About Us</p>
        <h1 className="text-4xl font-bold text-gray-800 mt-2">We are a nonprofit team working worldwide</h1>
        <p className="text-gray-600 mt-4 mx-auto max-w-2xl">
          AidBridge is a platform dedicated to bridging the gap between those in need and organizations willing to help. With volunteers, NGOs, municipal bodies, and other supportive organizations, we work collaboratively to ensure aid reaches those who need it most.
        </p>
      </section>

      {/* Video/Image Section */}
      <section className="relative">
        <img src={team} alt="AidBridge Team" className=" h-96  rounded-lg shadow-lg"/>
        <button className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-4 rounded-full shadow-lg">
            {/* <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.5 4.5a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-11zM5 4a1.5 1.5 0 011.5-1.5h7A1.5 1.5 0 0116 4v11a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 015 15V4z"></path>
              <path d="M9 8.5a.5.5 0 00-.757.429v2.142a.5.5 0 00.757.429l2.25-1.071a.5.5 0 000-.858L9 8.5z"></path>
            </svg> */}
          </div>
        </button>
      </section>

      {/* Mission & Vision Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {/* Mission */}
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">Our Mission</h2>
          <p className="text-gray-600 mt-2">
            Connecting individuals to vital resources and support. Our mission is to provide a platform where individuals and communities can connect with essential resources, from orphan homes to shelters, animal welfare organizations, and more.
          </p>
        </div>
        {/* Vision */}
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">Our Vision</h2>
          <p className="text-gray-600 mt-2">
            A world where no one is left behind. Through our platform, we aim to reduce the gap between those in need and those willing to help, building stronger, more resilient communities.
          </p>
        </div>
      </section>
    </div>
    (
    <div className="bg-gray-50 p-8">
      {/* Header Section */}
      <section className="text-center mb-10">
        <p className="text-sm uppercase tracking-wider text-gray-500">Know About Us</p>
        <h1 className="text-4xl font-bold text-gray-800 mt-2">We are a nonprofit team working worldwide</h1>
        <p className="text-gray-600 mt-4 mx-auto max-w-2xl">
          AidBridge is a platform dedicated to bridging the gap between those in need and organizations willing to help. With volunteers, NGOs, municipal bodies, and other supportive organizations, we work collaboratively to ensure aid reaches those who need it most.
        </p>
      </section>

      {/* Video/Image Section */}
      <section className="relative">
        <img src="https://via.placeholder.com/1200x400" alt="AidBridge Team" className="w-full rounded-lg shadow-lg"/>
        <button className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-4 rounded-full shadow-lg">
            <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.5 4.5a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-11zM5 4a1.5 1.5 0 011.5-1.5h7A1.5 1.5 0 0116 4v11a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 015 15V4z"></path>
              <path d="M9 8.5a.5.5 0 00-.757.429v2.142a.5.5 0 00.757.429l2.25-1.071a.5.5 0 000-.858L9 8.5z"></path>
            </svg>
          </div>
        </button>
      </section>

      {/* Mission & Vision Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">Our Mission</h2>
          <p className="text-gray-600 mt-2">
            Connecting individuals to vital resources and support. Our mission is to provide a platform where individuals and communities can connect with essential resources, from orphan homes to shelters, animal welfare organizations, and more.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">Our Vision</h2>
          <p className="text-gray-600 mt-2">
            A world where no one is left behind. Through our platform, we aim to reduce the gap between those in need and those willing to help, building stronger, more resilient communities.
          </p>
        </div>
      </section>

      {/* Awards & Recognitions Section */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Awards & Recognitions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          <div className="flex flex-col items-center">
            <div className="text-green-500 text-3xl">&#x1F3C6;</div>
            <p className="text-lg font-medium">2021</p>
            <p className="text-gray-600">Best NGO Award</p>
            <p className="text-sm text-gray-400">Berlin, Germany</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-green-500 text-3xl">&#x1F3C6;</div>
            <p className="text-lg font-medium">2018</p>
            <p className="text-gray-600">Global Award</p>
            <p className="text-sm text-gray-400">New York, USA</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-green-500 text-3xl">&#x1F3C6;</div>
            <p className="text-lg font-medium">2014</p>
            <p className="text-gray-600">Forest Award</p>
            <p className="text-sm text-gray-400">New Delhi, India</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-green-500 text-3xl">&#x1F3C6;</div>
            <p className="text-lg font-medium">2010</p>
            <p className="text-gray-600">Earth Saver Award</p>
            <p className="text-sm text-gray-400">Vienna, Austria</p>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="mt-16 bg-gray-900 text-white p-10 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold">Our Journey</h2>
          <h3 className="text-5xl font-bold my-4">How we raised 34M</h3>
          <p className="text-gray-400">
            Over the years, we have connected with donors, volunteers, and communities, raising significant resources to make a real impact. Together, we have achieved amazing results through a shared vision of compassion and dedication.
          </p>
          <div className="flex space-x-8 mt-6">
            <div>
              <p className="text-2xl font-semibold">34M+</p>
              <p className="text-gray-400">Donations Received</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">400+</p>
              <p className="text-gray-400">Volunteers</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">40k+</p>
              <p className="text-gray-400">Trees Planted</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
          <img src="https://via.placeholder.com/500x400" alt="Our Journey" className="rounded-lg shadow-lg"/>
        </div>
      </section>
    </div>
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Meet our team</h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>
        </div>
        
        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4 shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
              
              {/* Social Media Icons */}
              <div className="flex justify-center space-x-4 mt-4 text-gray-600">
                <a href="#" aria-label="Facebook" className="hover:text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.68 9.12 8.44 9.88v-6.99H7.9V12h2.54V9.82c0-2.5 1.49-3.89 3.77-3.89 1.1 0 2.25.2 2.25.2v2.47H14.7c-1.36 0-1.78.85-1.78 1.72V12h3l-.48 2.88h-2.52v6.99C18.32 21.12 22 17 22 12z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Twitter" className="hover:text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.56c-.88.39-1.83.66-2.83.78 1.02-.61 1.8-1.57 2.17-2.71-.95.57-2 .98-3.12 1.2-.9-.96-2.18-1.56-3.6-1.56-2.73 0-4.94 2.21-4.94 4.94 0 .39.04.76.12 1.12C7.69 8.09 4.07 6.13 1.64 3.16c-.43.74-.68 1.6-.68 2.52 0 1.73.88 3.25 2.22 4.14-.82-.02-1.58-.25-2.24-.62v.06c0 2.41 1.72 4.41 4.01 4.87-.42.11-.87.16-1.33.16-.32 0-.64-.03-.94-.09.64 2 2.5 3.46 4.7 3.5-1.72 1.35-3.89 2.16-6.24 2.16-.4 0-.8-.02-1.19-.07 2.22 1.43 4.86 2.27 7.69 2.27 9.22 0 14.28-7.64 14.28-14.28 0-.22 0-.43-.01-.64.98-.7 1.83-1.56 2.5-2.54z"/>
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.13 3H4.87A1.88 1.88 0 003 4.87v14.26C3 20.99 3.88 22 4.87 22h14.26c1 0 1.87-.88 1.87-1.87V4.87A1.88 1.88 0 0019.13 3zm-9.5 15.12H7.64v-6.84h1.99v6.84zm-.98-7.8c-.66 0-1.2-.54-1.2-1.2 0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2c0 .66-.54 1.2-1.2 1.2zm9.35 7.8h-1.99v-3.53c0-.84-.02-1.92-1.17-1.92s-1.35.91-1.35 1.86v3.6H11.3v-6.84h1.91v.93h.03c.27-.5.92-1.02 1.89-1.02 2.02 0 2.4 1.33 2.4 3.06v3.87z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
       


    </>
}

export default About
