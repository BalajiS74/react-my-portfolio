import React from "react";
import { useNavigate } from "react-router-dom";
import { GlobalBtn } from "./GlobalBtn";
import { blogPosts } from "../data/blogData";

export const Blogs = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-5 animated-section">
      <h2 className="text-center mb-5 fw-bold">Latest Blog Posts</h2>
      <div className="row g-4">
        {blogPosts.slice(0, 3).map((post, index) => (
          <div
            key={post.id}
            className="col-md-6 col-lg-4 animated-card"
            style={{ animationDelay: `${0.1 + index * 0.1}s` }}
          >
            <div className="card h-100 shadow-sm border-0 blog-card">
              <img
                src={post.image}
                className="card-img-top responsive-image"
                alt={post.title}
                style={{
                  maxHeight: post.imageHeight || "220px",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
              <div className="card-body d-flex flex-column">
                <div className="mb-2">
                  <span className="text-muted small">{post.date}</span>
                </div>
                <h5 className="card-title fw-semibold">{post.title}</h5>
                <p className="card-text text-muted flex-grow-1">
                  {post.description}
                </p>
                <GlobalBtn
                  href={post.link}
                  className="btn btn-outline-primary btn-sm mt-3 align-self-start"
                  target="_blank"
                  rel="noopener noreferrer"
                  name="Read More →"
                />
              </div>
            </div>
          </div>
        ))}

        <div className="col-12 text-center mt-4">
          <GlobalBtn
            name="See All Blogs"
            className="btn btn-primary"
            onClick={() => navigate("/blogs")}
          />
        </div>
      </div>
    </div>
  );
};
