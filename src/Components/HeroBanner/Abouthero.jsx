import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import parse from "html-react-parser";

const Abouthero = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "/assets/img/about/06.png",
    "/assets/img/about/07.png",
    "/assets/img/about/08.png",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const heroContent = {
    subtitle: "Grow Your Business with Impactful Advertising",
    title: " Empowering Brands with Data-Driven Digital Marketing",
    content:
      "At Corcus Studio, we are a results-focused digital marketing agency committed to helping businesses thrive in the online world. With a deep understanding of consumer behavior and the latest marketing tools, we create strategies that not only reach your target audience but also convert them into loyal customers.",
  };

  return (
    <section className="hero-section hero-3 about-hero">
      <div className="container">
        <div className="row flex-lg-row flex-column-reverse align-items-center px-4">
          {/* Content */}
          <div className="col-lg-6 hero-content text-lg-start text-center mt-4 mt-lg-0">
            <h6 className="wow fadeInUp">{heroContent.subtitle}</h6>
            <h1
              className="wow fadeInUp"
              data-wow-delay=".3s"
              style={{ marginBottom: "15px" }}
            >
              {parse(heroContent.title)}
            </h1>
            <p className="wow fadeInUp" data-wow-delay=".5s">
              {heroContent.content}
            </p>
          </div>

          {/* Image */}
          <div className="col-lg-6 text-center">
            <img
              src={heroImages[currentImageIndex]}
              alt="About Hero"
              className="img-fluid"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx="true">{`
        .about-hero {
          padding: 80px 0 40px 0;
        }

        .hero-content h1 {
          font-size: 2.5rem;
          font-weight: 700;
        }

        .hero-content p {
          font-size: 1.1rem;
          color: #444;
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2rem;
          }

          .hero-content p {
            font-size: 1rem;
            padding: 0 10px;
          }

          .about-hero {
            padding: 60px 0 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default Abouthero;
