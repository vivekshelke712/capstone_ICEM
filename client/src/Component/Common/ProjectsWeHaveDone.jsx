import React from 'react';
import { Link } from 'react-router-dom';
import HappyKids from '../../assets/HappyKids.jpg';
import HappyLady from '../../assets/HappyLady.jpg';
import HappyDog from '../../assets/HappyDog.jpg';

const ProjectCard = ({ project }) => (
  <div className="relative rounded-lg overflow-hidden shadow-lg">
    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
      <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <Link
        to={`/projects/${project.id}`}
        className="self-start bg-white text-black px-4 py-2 rounded-lg font-semibold"
      >
        See more
      </Link>
    </div>
  </div>
);

const ProjectsWeHaveDone = () => {
  const projects = [
    {
      id: 1,
      image: HappyDog,
      title: 'Animal Shelter Project',
      description: 'Providing shelter and care for abandoned animals.',
      location: 'Pune, India',
      category: 'Animal Shelter',
      date: '2023-03-15',
      extraInfo: 'We have rescued over 100 animals this year, and we are planning to expand our shelter facilities.',
    },
    {
      id: 2,
      image: HappyLady,
      title: 'Old Age Home Care',
      description: 'Caring for the elderly in need of a loving home.',
      location: 'Mumbai, India',
      category: 'Old Age Home',
      date: '2023-06-20',
      extraInfo: 'This project aims to provide a safe and peaceful environment for elderly citizens, with healthcare facilities available 24/7.',
    },
    {
      id: 3,
      image: HappyKids,
      title: 'Educational Help Program',
      description: 'Supporting underprivileged students with educational resources.',
      location: 'Bangalore, India',
      category: 'Educational Help',
      date: '2023-07-10',
      extraInfo: 'We provide free study materials, tuition, and mentorship to children in low-income areas, empowering them for a brighter future.',
    },
  ];

  return (
    <section className="p-8">
      <div className="mb-8">
        <h2 className="text-sm font-semibold text-gray-600">PROJECTS WE HAVE DONE</h2>
        <h1 className="text-3xl font-bold text-gray-900">
          We are Creating a Sustainable Society for Everyone and Forever.
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsWeHaveDone;
