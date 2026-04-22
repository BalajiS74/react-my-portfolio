import React, { useState } from "react";
import { useInView } from "../hooks/useInView";
import { GlobalBtn } from "./GlobalBtn";
export const Contact = () => {
  const { ref, inView } = useInView();
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
    <section
      ref={ref}
      className={`contact-section py-5 reveal ${inView ? "in-view" : ""}`}
    >
      <div className="container">
        <div className="contact-card p-4">
          <div className="text-center mb-4">
            <h2 className="fw-bold">Get in Touch</h2>
            <p className="text-muted mb-0">
              Send me a message and I'll get back within 24 hours.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {" "}
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
                  <label htmlFor="name" className="form-label fw-semibold">
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
                  <label htmlFor="email" className="form-label fw-semibold">
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
                  <label htmlFor="message" className="form-label fw-semibold">
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
                <div className="text-center">
                  <GlobalBtn
                    name="Send Message"
                    type="submit"
                    className="btn-primary"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
