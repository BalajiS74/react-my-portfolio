import React from "react";
import { useInView } from "../hooks/useInView";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={"bg-dark text-light pt-2 pb-2 mt-auto rounded-3  "}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 text-white-50 small">
              &copy; {currentYear}Balaji@dev. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="btn btn-outline-light btn-sm"
              aria-label="Back to top"
            >
              Back to Top <i className="bi bi-arrow-up-short"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Optional custom styles */}
      <style jsx>{`
        .hover-link:hover {
          color: white !important;
          text-decoration: underline !important;
          transition: color 0.3s ease;
        }
        .social-icon {
          transition:
            transform 0.3s ease,
            color 0.3s ease;
        }
        .social-icon:hover {
          transform: translateY(-3px);
          color: #0d6efd !important;
        }
      `}</style>
    </footer>
  );
};
