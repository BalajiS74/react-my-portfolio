import React from "react";
import { GlobalBtn } from "./GlobalBtn";
import { useInView } from "../hooks/useInView";
import gmailprofile from "../assets/projects-image/myprofile.jpg";

const Profile = () => {
  const { ref, inView } = useInView();

  return (
    <>
      <div
        ref={ref}
        className={`hero-inner row g-0 g-md-4 d-lg-flex align-items-lg-center align-content-center reveal ${inView ? "in-view" : ""}`}
        style={{
          width: "100%",
          margin: "0 auto",
          padding: "clamp(1rem, 5vw, 3rem) clamp(0.5rem, 3vw, 2rem)",
        }}
      >
        <div className="col-12 col-md-12 col-lg-8 order-2 order-lg-1">
          <div className="hero-content w-100">
            <h1
              className="hero-title"
              style={{ fontSize: "clamp(2rem, 7vw, 3.5rem)" }}
            >
              Hello, I'm <span className="accent">Balaji</span>
            </h1>
            <p
              className="hero-sublead"
              style={{
                width: "100%",
                fontSize: "clamp(1rem, 3.5vw, 1.2rem)",
                lineHeight: "1.6",
              }}
            >
              I am a passionate Web Developer with a Diploma in Computer
              Engineering and currently working as a{" "}
              <span style={{ color: "green", fontWeight: "bold" }}>
                Jr.Production Engineer at iWave,
              </span>{" "}
              an embedded systems company. I have a strong interest in web and
              mobile application development, with knowledge in the MERN Stack
              and React Native. I enjoy building responsive, user-friendly, and
              scalable applications while continuously improving my technical
              and problem-solving skills. I am a quick learner, a responsible
              team player, and always eager to take on new challenges that
              contribute to my professional growth and career development.
            </p>
            <div
              className="hero-actions"
              style={{
                display: "flex",
                gap: "clamp(0.8rem, 3vw, 1.5rem)",
                flexWrap: "wrap",
              }}
            >
              <GlobalBtn
                name="Download CV"
                href={`${import.meta.env.BASE_URL}my_resume.pdf`}
                download
              />
              <GlobalBtn
                name="Contact Me"
                isSecondStyle
                href={"/react-my-portfolio/#contact"}
              />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-12 col-lg-4 d-flex justify-content-center order-1 order-lg-2 mb-4 mb-lg-0">
          <div
            className="profile-wrap flex-column align-items-center text-center"
            style={{ width: "100%" }}
          >
            <img
              src={gmailprofile}
              alt="Profile picture of Balaji"
              className="profile-img"
              style={{
                width: "clamp(200px, 40vw, 350px)",
                height: "clamp(200px, 40vw, 350px)",
                borderRadius: "50%",
                objectFit: "cover",
                margin: "0 auto",
              }}
            />
            <h4
              className="mt-4"
              style={{ fontSize: "clamp(1rem, 4.5vw, 1.35rem)" }}
            >
              Jr.Production Engineer |{" "}
              <a
                href="https://www.iwavesystems.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-success">iWave</span>
              </a>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
