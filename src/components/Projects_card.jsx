import React from "react";
import { useInView } from "../hooks/useInView";
import { GlobalBtn } from "./GlobalBtn";
// Import other project images as needed
import guessgame from "../assets/projects-image/guessgame.png";
import dsa_project from "../assets/projects-image/dsa_project.png";
import flipcart from "../assets/projects-image/flipcart_clone.png";
import weatherapp from "../assets/projects-image/weathercast.png";
import scadbus from "../assets/projects-image/scad_bus.png";
import arangam from "../assets/projects-image/arangam.png";
import foody from "../assets/projects-image/foody.png";
const projectsData = [
  {
    id: 1,
    title: "Learn DSA through Animation",
    description:
      "An interactive learning platform for Data Structures and Algorithms, built with React. Features visualizations and hands-on exercises.",
    image: dsa_project,
    demoLink: "https://balajis74.github.io/DSA/",
    codeLink: "https://github.com/BalajiS74/DSA",
  },
  {
    id: 2,
    title: "flipcart clone",
    description:
      "A clone of the popular e-commerce website Flipkart, built with React. It features product listings, a shopping cart, and a responsive design.",
    image: flipcart, // Replace with actual import
    demoLink: "https://balajis74.github.io/flipcart/",
    codeLink: "https://github.com/BalajiS74/flipcart",
  },
  {
    id: 3,
    title: "Weather App",
    description:
      "A simple weather application built with React. It fetches real-time weather data and displays it in a user-friendly interface.",
    image: weatherapp,
    demoLink: "https://react-weather-app-five-coral.vercel.app/",
    codeLink: "https://github.com/BalajiS74/react-weather-app",
  },
  {
    id: 4,
    title: "Scad bus",
    description:
      "A simple bus tracking application built using react native with expo . It allows users to track bus locations and schedules in real-time.",
    image: scadbus, // Replace with actual import
    demoLink: "https://balajis74.github.io/scad-bus/",
    codeLink: "https://github.com/BalajiS74/scad-bus",
    isdiablebutton: true,
  },
  {
    id: 5,
    title: "Arangam",
    description:
      "A simple event management application built using react native with expo . It allows users to manage and organize events.",
    image: arangam,
    demoLink: "https://balajis74.github.io/arangam/",
    codeLink: "https://github.com/BalajiS74/arangam",
    isdiablebutton: true,
  },
  {
    id: 6,
    title: "Foody",
    description:
      "A simple food management web application built using react. It allows users to calculate the totak bill and finance.",
    image: foody,
    demoLink: "https://balajis74.github.io/foody-app/",
    codeLink: "https://github.com/BalajiS74/foody-app",
    isdiablebutton: false,
  },
  // Add more projects here
];
export const ProjectsCard = () => {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`container project_container py-5 reveal ${inView ? "in-view" : ""}`}
    >
      <h2 className="text-center mb-5 fw-bold">Show cases</h2>
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
