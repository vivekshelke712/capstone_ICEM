import React from 'react';
import { useLocation } from 'react-router-dom';

const ProjectDetails = () => {
  const location = useLocation();
  const project = location.state; // Access the project data passed via `state`

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section className="p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-md" />
        <h3 className="text-3xl font-semibold mt-4">{project.title}</h3>
        <p className="text-gray-600 mt-2">{project.description}</p>
        <p className="text-gray-500 mt-4">Location: {project.location}</p>
        <p className="text-gray-500 mt-1">Category: {project.category}</p>
        <p className="text-gray-500 mt-1">Date: {project.date}</p>
        <p className="text-gray-500 mt-4">{project.extraInfo}</p>
      </div>
    </section>
  );
};

export default ProjectDetails;
