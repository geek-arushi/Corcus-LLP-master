import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const InternPartner = () => {
  // Partner logos array
  const partnerLogos = [
    "/public/assets/img/Inetrn/1.png",
    "/public/assets/img/Inetrn/2.png",
    "/public/assets/img/Inetrn/3.png",
    "/public/assets/img/Inetrn/4.png",
    // Add more logos as needed
  ];

  // Duplicate logos to create seamless loop
  const loopedLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section className="partner-section py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 text-center">
            <div className="partner-header">
              <h2 className="section-title fw-bold mb-1"></h2>
              <p className="text-secondary">
               
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="marquee">
            {loopedLogos.map((logo, index) => (
              <div className="logo-item" key={index}>
                <img
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  className="img-fluid"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .partner-section {
          background-color: #ffffff;
          padding: 3rem 0;
        }
        .partner-header {
          margin-bottom: 2rem;
        }
        .marquee {
          display: flex;
          animation: scroll 25s linear infinite;
          width: max-content;
        }
        .logo-item {
          flex: 0 0 auto;
          padding: 0 25px;
          display: flex;
          align-items: center;
        }
        .marquee img {
          max-height: 60px;
          filter: grayscale(0.5);
          transition: filter 0.3s ease, transform 0.3s ease;
        }
        .marquee img:hover {
          filter: grayscale(0);
          transform: scale(1.1);
        }
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @media (max-width: 768px) {
          .marquee {
            animation-duration: 40s;
          }
        }
      `}</style>
    </section>
  );
};

export default InternPartner;