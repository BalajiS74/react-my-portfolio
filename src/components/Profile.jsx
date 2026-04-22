import React from "react";
import { GlobalBtn } from "./GlobalBtn";
import { useInView } from "../hooks/useInView";
import gmailprofile from "../assets/projects-image/myprofile.jpg";

const Profile = () => {
  const { ref, inView } = useInView();

  return (
    <>
      {" "}
      <div
        ref={ref}
        className={`hero-inner row g-0 g-md-4 d-lg-flex align-items-lg-center align-content-center reveal ${inView ? "in-view" : ""}`}
      >
        <div className=" col-8 col-lg-8 col-md-12">
          <div className="hero-content w-100">
            <h1 className="hero-title">
              Hello, I'm <span className="accent">Balaji</span>
            </h1>
            <p className="hero-sublead w-75 ">
              I am a dedicated Computer Science student with a strong focus on
              mobile and web application development. I aim to apply my
              technical knowledge to solve practical problems while continuously
              improving my skills in software development and analysis. I am a
              quick learner, a responsible team member, and committed to taking
              on challenges that contribute to my professional growth.
            </p>
            <div className="hero-actions">
              <GlobalBtn
                name="Download CV"
                href={`${import.meta.env.BASE_URL}my_resume.pdf`}
                download
              />
              <GlobalBtn
                name="Contact Me"
                isSecondStyle
                href="/react-my-portfolio/contact"
              />
            </div>
          </div>
        </div>

        <div className=" col-4 col-lg-4 col-md-12 d-flex justify-content-center">
          <div className="profile-wrap flex-column align-items-center text-center">
            <img
              src={gmailprofile}
              alt="Profile picture of Balaji"
              className="profile-img"
            />
            <h4 className="mt-4">
              Jr.Software Developer |{" "}
              <a href="https://www.iwavesystems.com/" target="_blank">
                <span className=" text-success">iwave</span>
              </a>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
