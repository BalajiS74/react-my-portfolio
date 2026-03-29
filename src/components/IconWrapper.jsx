import { useState, Img } from "react";

export function IconWrapper({ iconName, color, text, linkId }) {
  const [hover, setHover] = useState(false);
  const defaultStyle = {
    color: `${color}`,
    fontSize: 30,
    cursor: "pointer",
    transition: "all 150ms ease",
  };
  const hoverStyle = {
    transform: "translateY(-5px)",
    transition: "all 150ms ease",
    textShadow: "3px 4px 6px color ".replace(/color/g, color),
  };
  const style = hover
    ? { ...defaultStyle, ...hoverStyle }
    : { ...defaultStyle };
  return (
    <>
      {linkId ? (
        <a href={linkId} target="_blank" style={style}>
          <i
            className={`bi bi-${iconName}`}
            // style={style}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          ></i>
        </a>
      ) : (
        <i
          className={`bi bi-${iconName}`}
          style={style}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        ></i>
      )}
    </>
  );
}

export const ReactIconWrapper = ({ icon, size = 50 }) => {
  return (
    <>
      <svg
        width={size}
        height={size}
        fill={`#${icon.hex}`}
        viewBox=" 0 0 24 24"
        dangerouslySetInnerHTML={{ __html: icon.svg }}
      />
    </>
  );
};
