import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => (
  <div className="relative rounded-lg overflow-hidden shadow-lg">
    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
      <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <Link
        to={`/projects/${project.id}`}
        state={project} // Passing the project data using the state
        className="self-start bg-white text-black px-4 py-2 rounded-lg font-semibold"
      >
        See more
      </Link>
    </div>
  </div>
);

export default ProjectCard;
