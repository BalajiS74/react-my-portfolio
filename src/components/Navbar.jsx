import { GlobalBtn } from "./GlobalBtn";
import { IconWrapper } from "./IconWrapper";
import { useInView } from "../hooks/useInView";
import { useState } from "react";

const name = "<Balaji🐳/>";

const Navlink = (href, navname) => {
  const [isHoverd, setIsHoverd] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    const id = href.replace("#", "");
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-decoration-none na"
      style={{
        color: isHoverd ? "rgba(37, 217, 103, 1)" : "#000000ff",
        fontSize: "clamp(1rem, 4vw, 1.3rem)",
        fontWeight: 500,
        cursor: "pointer",
        listStyleType: "none",
        padding: "5px",
        transform: isHoverd ? "translateY(-2px)" : "translateY(0)",
        transition: "all 150ms ease",
      }}
      onMouseEnter={() => setIsHoverd(true)}
      onMouseLeave={() => setIsHoverd(false)}
    >
      <li
        style={{
          textShadow: isHoverd ? "3px 2px 4px rgba(4, 255, 96, 1)" : "none",
          transition: "all 150ms ease",
        }}
      >
        {navname}
      </li>
    </a>
  );
};

function Navbar() {
  const { ref, inView } = useInView();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      ref={ref}
      className={`container-fluid navbar-container reveal ${inView ? "in-view" : ""}`}
      style={{
        width: "100%",
        maxWidth: "100%",
        overflowX: "hidden",
      }}
    >
      <div className="row align-items-center py-md-3 pt-3 g-0">
        <div
          className="col-6 col-md-3 ps-md-4 ps-3"
          style={{ letterSpacing: 3 }}
        >
          <h3
            className="m-0"
            style={{ fontSize: "clamp(1.2rem, 5vw, 1.75rem)" }}
          >
            {name}
          </h3>
        </div>

        <div className="col-md-6 d-none d-md-flex">
          <ul className="list-unstyled d-flex gap-3 gap-lg-5 m-0 align-items-center justify-content-center w-100">
            {Navlink("#home", "Home")}
            {Navlink("#about", "About")}
            {Navlink("#skills", "Skills")}
            {Navlink("#projects", "Projects")}
            {Navlink("#blog", "Blog")}
          </ul>
        </div>

        <div className="col-6 col-md-3 d-flex justify-content-end justify-content-md-center align-items-center gap-2 gap-md-3">
          <div className="d-none d-md-flex gap-3 gap-lg-5">
            <IconWrapper
              iconName="instagram"
              color="red"
              linkId="https://www.instagram.com/mr_balu_5203/"
            />
            <IconWrapper
              iconName="github"
              color="black"
              linkId="https://github.com/BalajiS74"
            />
            <IconWrapper
              iconName="linkedin"
              color="skyblue"
              linkId="https://www.linkedin.com/in/balaji-s-a68403266"
            />
          </div>
          <button
            className="btn btn-lg d-md-none"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            style={{
              fontSize: "clamp(1.2rem, 6vw, 1.8rem)",
              padding: "8px 12px",
            }}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu with manual toggle */}
      <div
        className="d-md-none text-center"
        style={{
          maxHeight: isMenuOpen ? "500px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease-in-out",
        }}
      >
        <ul
          className="list-unstyled py-3 m-0"
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <li onClick={() => setIsMenuOpen(false)}>
            {Navlink("#home", "Home")}
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            {Navlink("#about", "About")}
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            {Navlink("#skills", "Skills")}
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            {Navlink("#projects", "Projects")}
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            {Navlink("#blog", "Blog")}
          </li>
        </ul>
        <div className="d-none">
          <GlobalBtn name="contact" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
