import { GlobalBtn } from "./GlobalBtn";
import { IconWrapper } from "./IconWrapper";
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
        fontSize: "1.3rem",
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
  return (
    <div className="container-fluid navbar-container">
      <div className="row align-items-center py-md-3 pt-3">
        {/* Name */}
        <div className="col-6 col-md-3 ps-md-4 " style={{ letterSpacing: 3 }}>
          <h3 className="m-0">{name}</h3>
        </div>

        {/* Desktop Menu */}
        <div className="col-md-6 d-none d-md-flex ">
          <ul className="list-unstyled d-flex gap-5 m-0 align-items-center justify-content-center w-100">
            {Navlink("#home", "Home")}
            {Navlink("#about", "About")}
            {Navlink("#skills", "Skills")}
            {Navlink("#projects", "Projects")}
            {Navlink("#blog", "Blog")}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="col-6 col-md-3 d-flex justify-content-end justify-content-md-center align-items-center gap-3">
          <div className="d-none d-md-flex gap-5">
            <IconWrapper iconName="instagram" color="red" />
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
            data-bs-toggle="collapse"
            data-bs-target="#mobileMenu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="collapse d-md-none text-center" id="mobileMenu">
        <ul className="list-unstyled py-3 m-0">
          {Navlink("#home", "Home")}
          {Navlink("#about", "About")}
          {Navlink("#skills", "Skills")}
          {Navlink("#projects", "Projects")}
          {Navlink("#blog", "Blog")}
        </ul>
        <div className="d-none">
          <GlobalBtn name="contact" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
