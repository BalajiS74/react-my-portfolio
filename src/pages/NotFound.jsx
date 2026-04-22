import React from "react";
import { Link } from "react-router-dom";
import { GlobalBtn } from "../components/GlobalBtn";
function NotFound() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100 text-center">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <p className="fs-3">
        <span className="text-danger">Oops!</span> Page not found.
      </p>
      <p className="lead">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <GlobalBtn
        name="Go Back Home"
        href="https://balajis74.github.io/react-my-portfolio/"
      />
    </div>
  );
}

export default NotFound;
