import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      position: "Volunteer",
      text: "AidBridge has been an amazing platform to connect with people in need. It has given me a chance to contribute to society and make a real difference.",
      image: "https://images.unsplash.com/photo-1547082661-71362fc3969c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D150"
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "NGO Worker",
      text: "Working with AidBridge has been a life-changing experience. The platform makes it so easy to reach people who need support, and the process is seamless.",
      image: "https://images.unsplash.com/photo-1547082661-71362fc3969c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D150"
    },
    {
      id: 3,
      name: "Alex Johnson",
      position: "Donor",
      text: "I am grateful to AidBridge for giving me a transparent and trustworthy platform to donate and support various causes.",
      image: "https://images.unsplash.com/photo-1547082661-71362fc3969c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D150"
    },
    {
      id: 4,
      name: "Emma Williams",
      position: "Beneficiary",
      text: "AidBridge helped me find support when I was going through a tough time. I'm truly thankful for this platform and all the people who help.",
      image: "https://images.unsplash.com/photo-1547082661-71362fc3969c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D150"
    },
    
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className=" mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">What People Say</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full sm:w-1/2 md:w-1/3 p-4 bg-white rounded-lg shadow-lg">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
              <p className="text-lg font-semibold text-gray-800">{testimonial.name}</p>
              <p className="text-gray-500">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;