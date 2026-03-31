import React from "react";
import { useInView } from "../hooks/useInView";
import { skills } from "../data/icon";
import { ReactIconWrapper } from "./IconWrapper";
const SkillComponent = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <>
      <div ref={ref} className={`reveal ${inView ? "in-view" : ""}`}>
        <h2 className="text-center mb-4 fw-bold"> My Skills</h2>
        <ul className="divider-list skill-list">
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
            "data analysis",
          ].map((skill, idx) => (
            <li
              key={skill}
              className="skill-chip"
              style={{ animationDelay: `${idx * 0.02}s` }}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className={" m-0 w-100 "}>
        <h3>Tools and Technologies i used</h3>
        <div
          className="skills-grid"
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            gap: 50,
            padding: 20,
            justifyContent: "center",
          }}
        >
          {skills.map((skill, index) => (
            <div key={skill.name || index} className="skill-icon-wrapper">
              <ReactIconWrapper icon={skill.icon} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillComponent;
