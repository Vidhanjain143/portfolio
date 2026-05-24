import React from "react";

// Reusable card component for experience
const ExperienceCard = ({ title, company, duration, description }) => {
  return (
    <div className="shadow-md hover:scale-105 duration-500 py-6 px-4 rounded-lg bg-gradient-to-b from-gray-800 to-black">
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <p className="text-lg text-gray-400 font-medium">{company}</p>
      <p className="text-sm text-gray-500 italic mb-4">{duration}</p>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

// Data for companies
const companies = [
  {
    title: "Frontend Engineer",
    company: "HashedIn By Deloitte",
    duration: "July 2024 - Present",
    description: "Building scalable enterprise frontend systems using Angular, React, and modern UI architectures while leading high-impact feature development for Deloitte Ascend.",
  },
  {
    title: "SDE Intern",
    company: "HashedIn By Deloitte",
    duration: "April 2024 - July 2024",
    description: "Developed React-based applications, optimizing frontend performance, and contributing to GenAI-focused product solutions",
  },
  // Add more companies here
];

const RealExperience = () => {
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-800 w-screen h-fit text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">Here are some of the roles I've worked in:</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {companies.map((company, index) => (
            <ExperienceCard
              key={index}
              title={company.title}
              company={company.company}
              duration={company.duration}
              description={company.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RealExperience;