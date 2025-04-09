import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Why = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "assets/img/why/why.png",
    "assets/img/why/why2.png",
    // Add more images as needed
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="container py-5">
      {/* Title Section */}
      <div className="text-left mb-5">
        <h1
          className="display-3 fw-bold stroke-text"
          style={{
            WebkitTextStroke: "2px black",
            color: "transparent",
          }}
        >
          WHAT SETS US APART
        </h1>
      </div>

      <div className="row mt-5">
        {/* Left - Auto Image Scroll */}
        <div className="col-lg-6 mb-4 mb-lg-0">
          <img
            src={images[currentImageIndex]}
            alt="Why Choose Us"
            className="img-fluid"
          />
        </div>

        {/* Right - Content Section */}
        <div className="col-lg-6">
          {[
            {
              number: "1",
              icon: "./assets/img/pimg1.png",
              title: "Innovation-Driven Strategies",
              text: "We believe in staying ahead of the curve.",
            },
            {
              number: "2",
              icon: "./assets/img/pimg2.png",
              title: "Client-Centric Approach",
              text: "Our clients are at the heart of everything we do.",
            },
            {
              number: "3",
              icon: "./assets/img/pimg3.png",
              title: "Industry Expertise",
              text: "Trust is the foundation of all successful partnerships.",
            },
            {
              number: "4",
              icon: "./assets/img/pimg4.png",
              title: "Client-Centric Focus",
              text: "Our mission is to generate measurable outcomes.",
            },
            {
              number: "5",
              icon: "./assets/img/pimg5.png",
              title: "Collaboration and Teamwork",
              text: "Trust is the foundation of all successful partnerships.",
            },
          ].map((item, index) => (
            <div className="d-flex align-items-start mb-4" key={index}>
              {/* Number */}
              <div
                className="display-5 fw-bold me-3"
                style={{
                  WebkitTextStroke: "2px black",
                  color: "transparent",
                  minWidth: "30px",
                  lineHeight: "1",
                }}
              >
                {item.number}
              </div>

              {/* Icon */}
              <div className="me-3 d-flex align-items-center" style={{ minWidth: "40px", height: "40px" }}>
                <img
                  src={item.icon}
                  alt={`Icon for ${item.title}`}
                  width="40"
                  height="40"
                  className="img-fluid"
                />
              </div>

              {/* Text */}
              <div>
                <h5 className="fw-bold mb-1">{item.title}</h5>
                <p className="mb-0">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx="true">{`
        .stroke-text {
          -webkit-text-stroke: 2px black;
          color: transparent;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .stroke-text {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Why;
