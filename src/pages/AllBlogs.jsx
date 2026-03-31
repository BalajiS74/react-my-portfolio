import React from "react";
import { useInView } from "../hooks/useInView";
import { blogPosts } from "../data/blogData";
import { GlobalBtn } from "../components/GlobalBtn";

const AllBlogs = () => {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className={`container py-5 reveal ${inView ? "in-view" : ""}`}>
      <h2 className="text-center mb-5 fw-bold">All Blog Posts</h2>
      <div className="row g-4">
        {blogPosts.map((post) => (
          <div key={post.id} className="col-md-6 col-lg-4 animated-card" style={{ animationDelay: `${0.1 + (post.id - 1) * 0.08}s` }}>
            <div className="card h-100 shadow-sm border-0 blog-card">
              <img
                src={post.image}
                className="card-img-top responsive-image"
                alt={post.title}
                style={{ maxHeight: post.imageHeight || "260px", width: "100%", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <span className="text-muted small mb-2">{post.date}</span>
                <h5 className="card-title fw-semibold">{post.title}</h5>
                <p className="card-text text-muted flex-grow-1">{post.description}</p>
                <div className="mt-3">
                  <GlobalBtn
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    name="Read more"
                    className="btn btn-outline-primary btn-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
