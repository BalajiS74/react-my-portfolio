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

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing contacts
    const existingContacts = JSON.parse(localStorage.getItem("contacts")) || [];

    // Add new contact
    const updatedContacts = [...existingContacts, formData];

    // Store in localStorage
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));

    console.log("Stored Contacts:", updatedContacts);

    // Success Message
    setSubmitted(true);

    // Reset Form
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Hide Success Alert
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
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
              {submitted && (
                <div
                  className="alert alert-success alert-dismissible fade show"
                  role="alert"
                >
                  Message sent successfully!
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setSubmitted(false)}
                    aria-label="Close"
                  ></button>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Name */}
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

                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Email Address
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

                {/* Message */}
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

                {/* Button */}
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
