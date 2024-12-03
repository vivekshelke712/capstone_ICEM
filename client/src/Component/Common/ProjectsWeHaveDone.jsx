import React from 'react';
import HappyKids from '../../assets/HappyKids.jpg'
import HappyLady from '../../assets/HappyLady.jpg'
import HappyDog from '../../assets/HappyDog.jpg'
const ProjectCard = ({ image, title, description }) => (
  <div className="relative rounded-lg overflow-hidden shadow-lg">
    <img src={image} alt={title} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
      <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <button className="self-start bg-white text-black px-4 py-2 rounded-lg font-semibold">
        See more
      </button>
    </div>
  </div>
);

const ProjectsWeHaveDone = () => {
  const projects = [
    {
      image: HappyDog,
      title: "Mission 40K: Tree Plantation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: HappyLady,
      title: "Weekly cleanliness program in city",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: HappyKids,
      title: "Wildlife safety program 2021",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <section className="p-8">
      <div className="mb-8">
        <h2 className="text-sm font-semibold text-gray-600">PROJECTS WE HAVE DONE</h2>
        <h1 className="text-3xl font-bold text-gray-900">
          We are Creating sustainable society, for everyone and forever.
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsWeHaveDone;