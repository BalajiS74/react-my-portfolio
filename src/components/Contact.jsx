import React, { useState } from "react";
import { GlobalBtn } from "./GlobalBtn";
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the data to a backend service
    console.log("Form data submitted:", formData);
    setSubmitted(true);
    // Optionally reset form
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="container py-5 animated-section">
      <h2 className="text-center mb-5 fw-bold">Get in Touch</h2>
      <div className="row g-5">
        {/* Contact Form */}
        <div className="col-lg-12">
          {submitted && (
            <div
              className="alert alert-success alert-dismissible fade show"
              role="alert"
            >
              Thank you for reaching out! I'll get back to you soon.
              <button
                type="button"
                className="btn-close"
                onClick={() => setSubmitted(false)}
                aria-label="Close"
              ></button>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <GlobalBtn name="Send Message" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};
