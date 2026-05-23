import React from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "../hooks/useInView";
import { GlobalBtn } from "./GlobalBtn";
import { blogPosts } from "../data/blogData";

export const Blogs = () => {
  const { ref, inView } = useInView();
  const navigate = useNavigate();

  return (
    <div
      ref={ref}
      className={`container py-5 reveal ${inView ? "in-view" : ""}`}
    >
      <h2 className="text-center mb-5 fw-bold">Latest Blog Posts</h2>
      <div className="row g-4">
        {blogPosts.slice(0, 3).map((post, index) => (
          <div
            key={post.id}
            className="col-md-6 col-lg-4 animated-card"
            style={{ animationDelay: `${0.1 + index * 0.1}s` }}
          >
            <div className="card h-100 border-0 blog-card shadow-hover">
              <div className="blog-image-wrap overflow-hidden">
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
              </div>
              <div className="card-body d-flex flex-column">
                <div className="blog-meta mb-2">
                  <span className="badge text-bg-secondary me-2">
                    {post.date || "Date TBA"}
                  </span>
                  <span className="text-muted">#{post.id}</span>
                </div>
                <h5 className="card-title fw-bold blog-title">{post.title}</h5>
                <p className="card-text text-muted flex-grow-1 blog-description">
                  {post.description}
                </p>
                <GlobalBtn
                  href={post.link}
                  className="mt-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  name="Read More"
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
            fullGreen={true}
          />
        </div>
      </div>
    </div>
  );
};
