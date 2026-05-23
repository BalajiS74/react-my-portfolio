import React from "react";
import { useInView } from "../hooks/useInView";
import { skills } from "../data/icon";
import { ReactIconWrapper } from "./IconWrapper";

const SkillComponent = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <>
      <div
        ref={ref}
        className={`reveal ${inView ? "in-view" : ""} myskills-section `}
      >
        <div className="container">
          {/* Section Header - BIGGER */}
          <div className="text-center mb-5">
            {/* <span
              className="badge bg-gradient px-4  mb-4 rounded-pill"
              style={{ backgroundColor: "rgba(37, 217, 103, 1)", fontSize: "1rem" }}
            >
              ⚡ Expertise
            </span> */}
            <h2 className=" fw-bold mb-4">My Skills</h2>
            <p
              className="text-secondary mx-auto"
              style={{ maxWidth: "600px", fontSize: "1.2rem" }}
            >
              Technologies and abilities I bring to every project
            </p>
          </div>

          {/* Skills Chips - MUCH BIGGER */}
          <div className="d-flex flex-wrap justify-content-center gap-5">
            {[
              "making responsive website",
              "making mobile app",
              "problem solving",
              "teamwork",
              "time management",
              "quick learner",
              "adaptability",
              "critical thinking",
              "communication skills",
              "leadershiping",
              "design thinking",
            ].map((skill, idx) => (
              <span
                key={skill}
                className="skill-chip badge bg-light text-dark border rounded-pill shadow-sm"
                style={{
                  animationDelay: `${idx * 0.02}s`,
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  padding: "12px 28px",
                  transition: "all 0.3s ease",
                  cursor: "default",
                  letterSpacing: "0.3px",
                }}
              >
                <span className="me-2" style={{ fontSize: "1.2rem" }}>
                  ✦
                </span>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Tools Section - BIGGER */}
      <div className="tools-section py-5">
        <div className="container">
          {/* Section Header - BIGGER */}
          <div className="text-center mb-5">
            {/* <span
              className="badge  bg-gradient px-4 py-3 mb-4 rounded-pill"
              style={{
                fontSize: "1rem",
                backgroundColor: "rgba(37, 217, 103, 1)",
              }}
            >
              🛠️ Tech Stack
            </span> */}
            <h2 className="fw-bold mb-4">
              Tools & Technologies
            </h2>
            <p
              className="text-secondary mx-auto"
              style={{ maxWidth: "600px", fontSize: "1.2rem" }}
            >
              Modern tools I work with daily
            </p>
          </div>

          {/* Icons Grid - BIGGER CARDS */}
          <div className="row g-5 justify-content-center">
            {skills.map((skill, index) => (
              <div
                key={skill.name || index}
                className="col-6 col-sm-4 col-md-3 col-lg-1"
              >
                <div
                  className=" transition-all"
                  style={{
                    transition: "transform 0.3s ease 0.3s ease",
                    cursor: "pointer",
                    padding: "1.75rem 1rem",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div className="mb-3">
                    <ReactIconWrapper icon={skill.icon} />
                  </div>
                  {skill.name && (
                    <span
                      className="fw-semibold text-secondary"
                      style={{ fontSize: "0.95rem" }}
                    >
                      {skill.name}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillComponent;
