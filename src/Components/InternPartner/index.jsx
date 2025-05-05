import "bootstrap/dist/css/bootstrap.min.css";

const InternP = () => {
  const logos = [
    "01.png",
    "02.png",
    "03.png",
    "04.png",
  ];

  // Duplicate logos to create seamless loop
  const loopedLogos = [...logos, ...logos];

  return (
    <div className="bg-white py-5 text-center">
      <h4 className="text-dark mb-4">Our Internship Partners</h4>
      <div className="logo-container overflow-hidden">
        <div className="marquee">
          {loopedLogos.map((logo, index) => (
            <div className="logo-item" key={index}>
              <img
                src={`/assets/img/Intern/${logo}`}
                alt={`Logo ${index + 1}`}
                className="img-fluid"
                loading="lazy"
                style={{ height: "50px" }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/img/Intern/placeholder.png"; // fallback image if needed
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
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
          justify-content: center;
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
    </div>
  );
};

export default InternP;
