import React, { useEffect } from "react";
import { GlobalBtn } from "../components/GlobalBtn";
import "./Home.css";
import { ProjectsCard } from "../components/Projects_card";
import { Contact } from "../components/Contact";
import { Blogs } from "../components/Blogs";
import { About } from "../components/about";
import { Footer } from "../components/Footer";
import SkillComponent from "../components/SkillComponent";
import Profile from "../components/Profile";
function Home() {
  return (
    <>
      <div className="home-page animated-section">
        {/* Home Section */}
        <section
          id="home"
          className="animated-section mx-5 d-flex align-items-center justify-content-center"
        >
          <Profile />
        </section>
        {/* About Section */}
        <section id="about">
          <About />
        </section>
        {/* Skills Section */}
        <section
          id="skills"
          className="d-flex flex-column gap-4 animated-section"
        >
          <SkillComponent />
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
