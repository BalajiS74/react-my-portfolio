import React from "react";
import { GlobalBtn } from "./GlobalBtn";
// Import other project images as needed
import guessgame from "../assets/projects-image/guessgame.png";
import dsa_project from "../assets/projects-image/dsa_project.png";
import flipcart from "../assets/projects-image/flipcart_clone.png";
import weatherapp from "../assets/projects-image/weathercast.png";
import scadbus from "../assets/projects-image/scad_bus.png";
import arangam from "../assets/projects-image/arangam.png";
const projectsData = [
  {
    id: 1,
    title: "Guess Game",
    description:
      "An interactive number guessing game built with React. Users guess a number between 1 and 100 and receive hints.",
    image: guessgame,
    demoLink: "https://balajis74.github.io/Guessing-Game/",
    codeLink: "https://github.com/BalajiS74/Guessing-Game",
  },
  {
    id: 2,
    title: "Learn DSA through Animation",
    description:
      "An interactive learning platform for Data Structures and Algorithms, built with React. Features visualizations and hands-on exercises.",
    image: dsa_project,
    demoLink: "https://balajis74.github.io/DSA/",
    codeLink: "https://github.com/BalajiS74/DSA",
  },
  {
    id: 3,
    title: "flipcart clone",
    description:
      "A clone of the popular e-commerce website Flipkart, built with React. It features product listings, a shopping cart, and a responsive design.",
    image: flipcart, // Replace with actual import
    demoLink: "https://balajis74.github.io/flipcart/",
    codeLink: "https://github.com/BalajiS74/flipcart",
  },
  {
    id: 4,
    title: "Weather App",
    description:
      "A simple weather application built with React. It fetches real-time weather data and displays it in a user-friendly interface.",
    image: weatherapp,
    demoLink: "https://react-weather-app-five-coral.vercel.app/",
    codeLink: "https://github.com/BalajiS74/react-weather-app",
  },
  {
    id: 5,
    title: "Scad bus",
    description:
      "A simple bus tracking application built using react native with expo . It allows users to track bus locations and schedules in real-time.",
    image: scadbus, // Replace with actual import
    demoLink: "https://balajis74.github.io/scad-bus/",
    codeLink: "https://github.com/BalajiS74/scad-bus",
    isdiablebutton: true,
  },
  {
    id: 6,
    title: "Arangam",
    description:
      "A simple event management application built using react native with expo . It allows users to manage and organize events.",
    image: arangam,
    demoLink: "https://balajis74.github.io/arangam/",
    codeLink: "https://github.com/BalajiS74/arangam",
    isdiablebutton: true,
  },
  // Add more projects here
];
export const ProjectsCard = () => {
  return (
    <div className="container project_container py-5 animated-section">
      <h2 className="text-center mb-5 fw-bold">Projects</h2>
      <div className="row g-4">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className="col-md-6 col-lg-4 animated-card"
            style={{ animationDelay: `${0.1 + index * 0.12}s` }}
          >
            <div className="card h-100 shadow-sm border-0 project-card">
              <img
                src={project.image}
                className="card-img-top responsive-image"
                alt={project.title}
                style={{
                  maxHeight: project.imageHeight || "220px",
                  objectFit: "cover",
                }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-semibold">{project.title}</h5>
                <p className="card-text text-muted flex-grow-1">
                  {project.description}
                </p>
                {!project.isdiablebutton && (
                  <div className="mt-3 d-flex gap-2">
                    <GlobalBtn
                      name="Live Demo"
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                    <GlobalBtn
                      name="GitHub"
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      isSecondStyle
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
