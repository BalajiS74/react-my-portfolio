import React, { useState } from "react";

export const GlobalBtn = ({
  name,
  btnsize,
  isSecondStyle,
  fullGreen,
  block,
  href,
  download,
  target,
  rel,
  className,
  onClick,
  type = "button",
}) => {
  const [hover, setHover] = useState(false);

  const defaultStyle = {
    color: "rgba(37, 217, 103, 1)",
    backgroundColor: "transparent",
    border: "1px solid rgba(37, 217, 103, 1)",
    cursor: "pointer",
    transition: "all 150ms ease",
  };

  const hoverStyle = {
    backgroundColor: "rgba(37, 217, 103, 1)",
    color: "#fff",
    transform: "translateY(-2px)",
    boxShadow: "0 6px 18px rgba(37,217,103,0.18)",
  };

  const secondaryStyle = {
    cursor: "pointer",
    border: "2px solid rgba(14, 25, 42, 0.06)",
    color: "#0f1724",
    transition: "all 160ms ease",
  };

  const secondaryHoverStyle = {
    transform: "translateY(-3px)",
    boxShadow: "0 8px 20px rgba(16, 24, 40, 0.06)",
  };

  const baseStyle = isSecondStyle
    ? { ...secondaryStyle, ...(hover ? secondaryHoverStyle : {}) }
    : { ...defaultStyle, ...(hover ? hoverStyle : {}) };

  const fullGreenStyle = {
    backgroundColor: "#25d967",
    color: "#ffffff",
    border: "1px solid #25d967",
  };

  const fullGreenHoverStyle = {
    backgroundColor: "#16a34a",
    color: "#ffffff",
    boxShadow: "0 8px 20px rgba(37, 217, 103, 0.22)",
    transform: "translateY(-2px)",
  };

  const style = {
    ...baseStyle,
    ...(fullGreen ? (hover ? fullGreenHoverStyle : fullGreenStyle) : {}),
    ...(block ? { width: "100%", display: "block" } : {}),
  };

  return (
    <>
      {href ? (
        <a
          href={href}
          download={download}
          target={target}
          rel={rel}
          style={style}
          onClick={onClick}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={`btn btn-sm font-weight-500 rounded-2 px-md-4 py-md-2 text-decoration-none ${btnsize || ""} ${className || ""}`}
        >
          {name}
        </a>
      ) : (
        <button
          type={type}
          style={style}
          onClick={onClick}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={`btn btn-sm font-weight-500 rounded-2 px-md-4 py-md-2 text-decoration-none ${btnsize || ""} ${className || ""}`}
        >
          {name}
        </button>
      )}
    </>
  );
};
