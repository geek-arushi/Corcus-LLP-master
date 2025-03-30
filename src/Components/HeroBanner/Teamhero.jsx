import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Teamhero = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  // State to manage the image index for the hero images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of images to be auto-scrolled in the content section
  const heroImages = [
    "public/assets/img/Servicedetail/1.png",
    "public/assets/img/Servicedetail/2.png",
    "public/assets/img/Servicedetail/3.png",
    "public/assets/img/Servicedetail/4.png",
    "public/assets/img/Servicedetail/5.png", // Add more images as needed
  ];

  // Set the interval to change the image every 3 seconds (3000ms)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const heroContent = {
    subtitle: "go for advertising",
    title: " Scale Your Brand with Performance Driven Marketing",
    content:
      " We help businesses maximize their ROI with data-driven strategies, high-converting ads, and powerful digital campaigns.",
  };

  return (
    <section
      className="hero-section hero-3"
      style={{ padding: "120px 0 10px 0" }}
    >
      <div className="container-fluid">
        <div className="row g-4 justify-content-between align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <h6 className="wow fadeInUp">{heroContent.subtitle}</h6>
              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                {parse(heroContent.title)}
              </h1>
              <p className="wow fadeInUp" data-wow-delay=".5s">
                {heroContent.content}
              </p>
              <div className="hero-button d-flex gap-3">
                <div
                  className="main-button wow fadeInUp"
                  data-wow-delay=".3s"
                ></div>
                <div
                  className="main-button wow fadeInUp"
                  data-wow-delay=".5s"
                ></div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div
              className="hero-image wow img-custom-anim-left"
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
            >
              <img src={heroImages[currentImageIndex]} alt="Hero" />
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for Contact Us Button */}
      <style>
        {`
          .contact-btn {
            background: transparent;
            border: 2px solid black;
            color: black;
            padding: 10px 20px;
            display: flex;
            align-items: center;
            border-radius: 25px;
            gap: 8px;
            transition: all 0.3s ease-in-out;
          }

          .contact-btn:hover {
            background: black;
            color: white;
          }
        `}
      </style>
    </section>
  );
};

export default Teamhero;
