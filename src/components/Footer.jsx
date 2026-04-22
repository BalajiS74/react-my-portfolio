import React from "react";
import { useInView } from "../hooks/useInView";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light pt-3 pb-3 mt-auto rounded-3">
      <div className="container">
        <div className="row align-items-center">
          {/* Left side: copyright */}
          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0 text-white-50 small">
              &copy; {currentYear} Balaji@dev. All rights reserved.
            </p>
          </div>

          {/* Middle: contact info */}
          <div className="col-md-4 text-center mb-3 mb-md-0">
            <p className="mb-0">
              <a href="tel:+919876543210" className="text-white-50 hover-link">
                <i className="bi bi-telephone me-2"></i> +91 7418581620
              </a>
            </p>
            <p className="mb-0">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=balaji.sornavel7418@gmail.com"
                className="text-white-50 hover-link"
              >
                <i className="bi bi-envelope me-2"></i>{" "}
                balaji.sornavel7418@gmail.com
              </a>
            </p>
          </div>

          {/* Right side: back to top */}
          <div className="col-md-4 text-center text-md-end">
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
