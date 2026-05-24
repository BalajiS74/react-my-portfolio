import React from "react";
import { useInView } from "../hooks/useInView";

export const About = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""}`}
      style={{
        // background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        paddingBottom: "clamp(2rem, 6vw, 3rem)",

        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background elements */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          right: "-20%",
          width: "300px",
          height: "300px",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-30%",
          left: "-10%",
          width: "200px",
          height: "200px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header with floating animation */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(2rem, 8vw, 4rem)",
            animation: inView ? "fadeInUp 0.8s ease-out" : "none",
          }}
        >
          <h2
            style={{
              fontWeight: "bold",
              color: "black",
              marginBottom: "1rem",
              textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
            }}
          >
            Get to Know Me
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 3vw, 1.2rem)",
              color: "rgba(0, 0, 0, 0.9)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Passionate developer creating digital experiences that matter
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "clamp(1.5rem, 4vw, 2.5rem)",
            marginBottom: "clamp(2rem, 5vw, 3rem)",
          }}
        >
          {/* Card 1 - Stats */}
          <div
            style={{
              background: "rgba(255,255,255,0.95)",
              borderRadius: "20px",
              padding: "clamp(1.5rem, 4vw, 2.5rem)",
              textAlign: "center",
              transition: "all 0.3s ease",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
            }}
          >
            <div
              style={{
                fontSize: "clamp(2.5rem, 8vw, 3.5rem)",
                marginBottom: "1rem",
              }}
            >
              🚀
            </div>
            <h3
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2rem)",
                color: "#667eea",
                marginBottom: "0.5rem",
              }}
            >
              6 months
            </h3>
            <p style={{ color: "#666", fontSize: "clamp(0.9rem, 3vw, 1rem)" }}>
              of Experience in Web Development
            </p>
          </div>

          {/* Card 2 - Stats */}
          <div
            style={{
              background: "rgba(255,255,255,0.95)",
              borderRadius: "20px",
              // padding: "clamp(1.5rem, 4vw, 2.5rem)",
              textAlign: "center",
              transition: "all 0.3s ease",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
            }}
          >
            <div
              style={{
                fontSize: "clamp(2.5rem, 8vw, 3.5rem)",
                marginBottom: "1rem",
              }}
            >
              💻
            </div>
            <h3
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2rem)",
                color: "#667eea",
                marginBottom: "0.5rem",
              }}
            >
              10+ Projects
            </h3>
            <p style={{ color: "#666", fontSize: "clamp(0.9rem, 3vw, 1rem)" }}>
              Completed Successfully
            </p>
          </div>

          {/* Card 3 - Stats */}
          <div
            style={{
              background: "rgba(255,255,255,0.95)",
              borderRadius: "20px",
              padding: "clamp(1.5rem, 4vw, 2.5rem)",
              textAlign: "center",
              transition: "all 0.3s ease",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
            }}
          >
            <div
              style={{
                fontSize: "clamp(2.5rem, 8vw, 3.5rem)",
                marginBottom: "1rem",
              }}
            >
              🤝
            </div>
            <h3
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2rem)",
                color: "#667eea",
                marginBottom: "0.5rem",
              }}
            >
              10+ Clients
            </h3>
            <p style={{ color: "#666", fontSize: "clamp(0.9rem, 3vw, 1rem)" }}>
              Happy & Satisfied
            </p>
          </div>
        </div>

        {/* Main content section */}
        <div
          style={{
            background: "rgba(255,255,255,0.95)",
            borderRadius: "20px",
            padding: "clamp(2rem, 6vw, 3rem)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "clamp(1.5rem, 4vw, 2.5rem)",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
                  marginBottom: "1rem",
                }}
              >
                👨‍💻
              </div>
              <h3
                style={{
                  fontSize: "clamp(1.3rem, 4vw, 1.8rem)",
                  color: "#667eea",
                  marginBottom: "1rem",
                }}
              >
                Who Am I?
              </h3>
              <p
                style={{
                  fontSize: "clamp(0.95rem, 3vw, 1.05rem)",
                  lineHeight: "1.6",
                  color: "#555",
                }}
              >
                I am a detail-oriented front-end developer specializing in
                React, modern JavaScript, and responsive design. My goal is to
                build accessible, performant web applications that users love
                and businesses rely on.
              </p>
            </div>

            <div>
              <div
                style={{
                  fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
                  marginBottom: "1rem",
                }}
              >
                🎯
              </div>
              <h3
                style={{
                  fontSize: "clamp(1.3rem, 4vw, 1.8rem)",
                  color: "#667eea",
                  marginBottom: "1rem",
                }}
              >
                My Approach
              </h3>
              <p
                style={{
                  fontSize: "clamp(0.95rem, 3vw, 1.05rem)",
                  lineHeight: "1.6",
                  color: "#555",
                }}
              >
                I enjoy collaborating with teams, converting design systems into
                pixel-perfect implementations, and keeping code maintainable
                through best practices. Continuous learning is core to my
                workflow.
              </p>
            </div>

            <div>
              <div
                style={{
                  fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
                  marginBottom: "1rem",
                }}
              >
                ⚡
              </div>
              <h3
                style={{
                  fontSize: "clamp(1.3rem, 4vw, 1.8rem)",
                  color: "#667eea",
                  marginBottom: "1rem",
                }}
              >
                What I Bring
              </h3>
              <p
                style={{
                  fontSize: "clamp(0.95rem, 3vw, 1.05rem)",
                  lineHeight: "1.6",
                  color: "#555",
                }}
              >
                My professional experience includes delivering scalable UI
                components, performance optimization, and cross-device
                compatibility while maintaining a clean and intuitive user
                experience.
              </p>
            </div>
          </div>
        </div>

        {/* Quote section */}
        <div
          style={{
            textAlign: "center",
            marginTop: "clamp(2rem, 6vw, 3rem)",
            padding: "clamp(1.5rem, 4vw, 2rem)",
            background: "rgba(59, 180, 89, 0.86)",
            borderRadius: "20px",
            backdropFilter: "blur(10px)",
          }}
        >
          <p
            style={{
              fontSize: "clamp(1rem, 4vw, 1.3rem)",
              fontStyle: "italic",
              color: "white",
              marginBottom: "0.5rem",
            }}
          >
            "Code is like humor. When you have to explain it, it's bad."
          </p>
          <p
            style={{
              fontSize: "clamp(0.9rem, 3vw, 1rem)",
              color: "rgba(255,255,255,0.8)",
            }}
          >
            - Cory House
          </p>
        </div>
      </div>

      {/* Add keyframe animations */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};
