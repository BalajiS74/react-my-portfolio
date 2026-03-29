import React, { useEffect } from "react";
import gmailprofile from "../assets/projects-image/myprofile.jpg";
import { GlobalBtn } from "../components/GlobalBtn";
import { IconWrapper, ReactIconWrapper } from "../components/IconWrapper";
import "./Home.css";
import { skills } from "../data/icon";
import { ProjectsCard } from "../components/projects_card";
import { Contact } from "../components/Contact";
import { Blogs } from "../components/Blogs";
import { About } from "../components/about";
import { Footer } from "../components/Footer";
function Home() {
  return (
    <>
      <div className="home-page animated-section">
      {/* Home Section */}
        <section
          id="home"
          className="animated-section mx-5 d-flex align-items-center justify-content-center"
        >
          <div className="hero-inner row g-0 g-md-4 d-lg-flex align-items-lg-center align-content-center ">
            <div className=" col-12 col-lg-8 col-md-12">
              <div className="hero-content w-100">
                <h1 className="hero-title">
                  Hello, I'm <span className="accent">Balaji</span>
                </h1>
                <p className="hero-sublead w-75">
                  I am a dedicated Computer Science student with a strong focus
                  on mobile and web application development. I aim to apply my
                  technical knowledge to solve practical problems while
                  continuously improving my skills in software development and
                  analysis. I am a quick learner, a responsible team member, and
                  committed to taking on challenges that contribute to my
                  professional growth.
                </p>
                <div className="hero-actions">
                  <GlobalBtn
                    name="Download CV"
                    href="/my_resume.pdf"
                    download
                  />
                  <GlobalBtn name="Contact Me" isSecondStyle href={"#contact"} />
                </div>
              </div>
            </div>

            <div className=" col-12 col-lg-4 col-md-12 d-flex justify-content-center">
              <div className="profile-wrap">
                <img
                  src={gmailprofile}
                  alt="Profile picture of Balaji"
                  className="profile-img"
                />
              </div>
            </div>
          </div>
        </section>
        {/* About Section */}
        {/* <section id="about">
          <About />
        </section> */}
        {/* Skills Section */}
        <section id="skills" className="d-flex flex-column gap-4 animated-section">
          <div className="divider mt-5">
            <h2 className="text-center mb-5">Skills</h2>
            <ul className="divider-list">
              <li>making responsive website </li>
              <li>making mobile app </li>
              <li>problem solving</li>
              <li>teamwork</li>
              <li>time management</li>
              <li>quick learner</li>
              <li>adaptability</li>
              <li>critical thinking</li>
              <li>communication skills</li>
              <li> data analysis</li>
            </ul>
          </div>
          <div className=" m-0 w-100">
            <h3>Tools and Technologies i used</h3>
            <div
              className=""
              style={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                gap: 50,
                padding: 20,
              }}
            >
              {skills.map((skill, index) => (
                <ReactIconWrapper key={index} icon={skill.icon} />
              ))}
            </div>
          </div>
        </section>
        <section id="projects" className="animated-section">
          <ProjectsCard />
        </section>

        <section id="blog" className="animated-section">
          <Blogs />
        </section>
        <section id="contact" className="animated-section">
          <Contact />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default Home;
