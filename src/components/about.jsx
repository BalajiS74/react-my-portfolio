import React from "react";
import { useInView } from "../hooks/useInView";

export const About = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`container py-5 reveal ${inView ? "in-view" : ""}`}
    >
      <h2 className="text-center mb-5 fw-bold">About Me</h2>

      <div className="row g-5 align-items-center">
        {/* Left side – original text */}
        <div className="col-lg-12 d-flex flex-column gap-5">
          <li className="fs-5" style={{ textAlign: "justify" }}>
            I am a detail-oriented front-end developer specializing in React,
            modern JavaScript, and responsive design. My goal is to build
            accessible, performant web applications that users love and
            businesses rely on.
          </li>
          <li className="fs-5" style={{ textAlign: "justify" }}>
            I enjoy collaborating with teams, converting design systems into
            pixel-perfect implementations, and keeping code maintainable through
            best practices. Continuous learning is core to my workflow: I follow
            trends, contribute to open-source, and refine my skills on
            real-world projects.
          </li>
          <li className="fs-5" style={{ textAlign: "justify" }}>
            My professional experience includes delivering scalable UI
            components, doing performance optimization, and implementing
            cross-device compatibility while maintaining a clean and intuitive
            user experience.
          </li>
        </div>
      </div>
    </div>
  );
};
