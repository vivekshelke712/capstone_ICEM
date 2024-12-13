import React from 'react';
import { useLocation } from 'react-router-dom';

const ProjectDetails = () => {
  const location = useLocation();
  const project = location.state; // Access project data passed via navigation

  if (!project) {
    return <div className="text-center text-gray-600 p-8">Project not found</div>;
  }

  return (
    <section className="p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-md"
        />
        <h3 className="text-3xl font-semibold mt-4 text-gray-800">{project.title}</h3>
        <p className="text-gray-600 mt-2 leading-relaxed">{project.description}</p>
        <div className="mt-4 space-y-2">
          <p className="text-gray-500">Location: {project.location || 'Not specified'}</p>
          <p className="text-gray-500">Category: {project.category || 'Not specified'}</p>
          <p className="text-gray-500">Date: {project.date || 'Not specified'}</p>
        </div>
        {project.extraInfo && (
          <p className="text-gray-500 mt-4 leading-relaxed">{project.extraInfo}</p>
        )}
      </div>
    </section>
  );
};

export default ProjectDetails;
