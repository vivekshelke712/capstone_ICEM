import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/project-details', { state: project });
  };

  return (
    <div className="card">
      <h3>{project.title}</h3>
      <button onClick={handleNavigate} className="btn btn-primary">
        View Details
      </button>
    </div>
  );
};

export default ProjectCard;
