import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BenefitsSection = () => {
  const boxStyle = {
    position: "relative",
    background: "white",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
    padding: "1.25rem 1.5rem",
    marginBottom: "1.5rem",
  };

  const iconStyle = {
    width: "2rem",
    height: "2rem",
    marginRight: "0.75rem",
    borderRadius: "0.375rem",
    flexShrink: 0,
  };

  const textXs = {
    fontSize: "0.75rem",
    lineHeight: "1rem",
    color: "#000",
    fontFamily: "Arial, sans-serif",
  };

  const textSm = {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    color: "#000",
    fontFamily: "Arial, sans-serif",
  };

  const titleSm = {
    fontWeight: 700,
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    color: "#000",
    fontFamily: "Arial, sans-serif",
  };

  const titleBase = {
    fontWeight: 700,
    fontSize: "1.125rem",
    lineHeight: "1.5rem",
    color: "#000",
    fontFamily: "Arial, sans-serif",
  };

  const btnYellow = {
    backgroundColor: "#fbbf24",
    color: "black",
    fontWeight: 600,
    fontSize: "1.125rem",
    padding: "0.25rem 0.75rem",
    borderRadius: "0.25rem",
    border: "none",
    fontFamily: "Arial, sans-serif",
  };

  const headerText = {
    fontSize: "0.75rem",
    lineHeight: "1rem",
    color: "black",
    fontFamily: "Arial, sans-serif",
    maxWidth: "20rem",
    marginLeft: "1rem",
  };

  const cornerStyle = (position, color) => {
    const base = {
      position: "absolute",
      width: "3.5rem",
      height: "3.5rem",
      borderWidth: "4px",
      borderStyle: "solid",
      borderRadius: "0.5rem",
    };
    if (position === "top-left") {
      return {
        ...base,
        top: 0,
        left: 0,
        borderTopColor: color,
        borderLeftColor: color,
        borderTop: "4px solid",
        borderLeft: "4px solid",
      };
    }
    if (position === "bottom-right") {
      return {
        ...base,
        bottom: 0,
        right: 0,
        borderBottomColor: color,
        borderRightColor: color,
        borderBottom: "4px solid",
        borderRight: "4px solid",
      };
    }
    if (position === "top-right") {
      return {
        ...base,
        top: 0,
        right: 0,
        borderTopColor: color,
        borderRightColor: color,
        borderTop: "4px solid",
        borderRight: "4px solid",
      };
    }
    if (position === "bottom-left") {
      return {
        ...base,
        bottom: 0,
        left: 0,
        borderBottomColor: color,
        borderLeftColor: color,
        borderBottom: "4px solid",
        borderLeft: "4px solid",
      };
    }
  };

  const Box = ({ color, icon, title, titleSize, corners, children }) => (
    <div className="position-relative" style={boxStyle}>
      {corners.map((corner, i) => (
        <div key={i} style={cornerStyle(corner, color)} />
      ))}
      <div className="d-flex align-items-center mb-3">
        <img src={icon} alt={title} style={iconStyle} />
        <h3 style={titleSize === "sm" ? titleSm : titleBase} className="mb-0">
          {title}
        </h3>
      </div>
      <p style={titleSize === "sm" ? textXs : textSm}>{children}</p>
    </div>
  );

  return (
    <div className="container py-5">
      <div className="d-flex flex-column flex-sm-row align-items-center mb-4">
        <button style={btnYellow}>Benefits</button>
        <p className="mt-3 mt-sm-0" style={headerText}>
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>
      <div className="row gx-4 gy-4 justify-content-center">
        <div className="col-12 col-sm-6">
          <Box
            color="#fbbf24"
            icon="https://placehold.co/32x32/png/fbbf24/000000?text=%F0%9F%93%9D"
            title="Tailored Learning Experience"
            titleSize="sm"
            corners={["top-left", "bottom-right"]}
          >
            Benefit from personalized courses that adapt to your learning style
            and preferences, ensuring a customized educational journey.
          </Box>
        </div>
        <div className="col-12 col-sm-6">
          <Box
            color="#2563eb"
            icon="https://placehold.co/32x32/png/2563eb/ffffff?text=%F0%9F%93%9D"
            title="Engaging Multimedia Content"
            titleSize="base"
            corners={["top-right", "bottom-left"]}
          >
            Enjoy the freedom to learn at your own pace, anytime, anywhere,
            allowing you to balance education with your busy schedule.
          </Box>
        </div>
        <div className="col-12 col-sm-6">
          <Box
            color="#a21caf"
            icon="https://placehold.co/32x32/png/a21caf/ffffff?text=%F0%9F%92%80"
            title="Career-Boosting Skills"
            titleSize="sm"
            corners={["top-left", "bottom-right"]}
          >
            Immerse yourself in interactive and enjoyable learning with
            multimedia content, quizzes, and hands-on exercises for a dynamic
            educational experience.
          </Box>
        </div>
        <div className="col-12 col-sm-6">
          <Box
            color="#f97316"
            icon="https://placehold.co/32x32/png/f97316/ffffff?text=%F0%9F%93%9D"
            title="Tailored Learning Experience"
            titleSize="base"
            corners={["top-right", "bottom-left"]}
          >
            Invest in your future with practical skills that enhance your career
            prospects, making you competitive and opening doors to new
            opportunities.
          </Box>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
