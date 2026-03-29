import React from "react";
// Import your profile image (replace with your actual image)
import profileImg from "../assets/gmailprofile.jpg";

export const About = () => {
  return (
    <div className="container py-5 animated-section">
      <h2 className="text-center mb-5 fw-bold">About Me</h2>
      <div className="row g-5 align-items-center">
        {/* Profile Image Column */}
        {/* <div className="col-md-5 col-lg-4 text-center">
          <img
            src={profileImg}
            alt="Profile"
            className="img-fluid rounded-2 shadow-lg"
            style={{
              maxWidth: "300px",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div> */}

        {/* Bio and Skills Column */}
        <div className="col-md-8 col-lg-12">
          <h2 className="mb-3">Hi, I'm [ Balaji S]</h2>
          <p className="lead w-75">
            I'm a passionate front-end developer with over 6 months of
            experience building responsive and user-friendly web applications.
          </p>
          <p className="w-75">
            I specialize in React, JavaScript, and modern CSS frameworks like
            Bootstrap. I love turning ideas into reality through clean code and
            thoughtful design. When I'm not coding, I enjoy reading books,
            learning new technologies, e.g., reading tech blogs, hiking, or
            contributing to open source.
          </p>
        </div>
      </div>
    </div>
  );
};
