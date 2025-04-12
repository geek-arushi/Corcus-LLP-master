import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import parse from "html-react-parser";

const Teamhero = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "assets/img/Servicedetail/1.png",
    "assets/img/Servicedetail/2.png",
    "assets/img/Servicedetail/3.png",
    "assets/img/Servicedetail/4.png",
    "assets/img/Servicedetail/5.png",
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
    subtitle: "Meet Our Experts",
    title: "The Passionate Minds Behind Your Brand's Growth",
    content:
      "Our team is a dynamic blend of strategists, designers, marketers, and developers who are united by a single mission — to help your brand thrive. With diverse backgrounds and a shared passion for innovation, we bring fresh ideas, collaborative energy, and data-driven execution to every project. We don’t just work for you — we work with you, as an extension of your vision.",
  };

  return (
    <section className="hero-section hero-3 py-60">
      <div className="container">
        <div className="row flex-lg-row flex-column-reverse align-items-center g-4 px-3">
          {/* Content */}
          <div className="col-lg-6 hero-content text-lg-start text-center mt-4 mt-lg-0">
            <h6 className="text-uppercase mb-3">{heroContent.subtitle}</h6>
            <h1 className="fw-bold mb-3">{parse(heroContent.title)}</h1>
            <p className="lead mb-0">{heroContent.content}</p>
          </div>

          {/* Image */}
          <div className="col-lg-6 text-center">
            <div className="hero-image">
              <img
                src={heroImages[currentImageIndex]}
                alt="Team Hero"
                className="img-fluid rounded"
                style={{
                  maxHeight: "420px",
                  objectFit: "cover",
                  width: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx="true">{`
        .hero-section.hero-3 {
          padding: 100px 0 20px 0;
        }

        .hero-content h1 {
          font-size: 2.6rem;
          line-height: 1.3;
        }

        .hero-content p {
          font-size: 1.05rem;
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

          .hero-image {
            margin-top: 20px;
          }

          .hero-section.hero-3 {
            padding: 60px 0 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Teamhero;
