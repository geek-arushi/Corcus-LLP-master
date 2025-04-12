import "bootstrap/dist/css/bootstrap.min.css";

const Poweredby = () => {
  const logos = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
    "9.png",
  ];

  // Duplicate logos to create seamless loop
  const loopedLogos = [...logos, ...logos];

  return (
    <div className="bg-black py-5 text-center">
      <h4 className="text-white mb-4">Partner with</h4>
      <div className="overflow-hidden">
        <div className="marquee">
          {loopedLogos.map((logo, index) => (
            <div className="logo-item" key={index}>
              <img
                src={`/assets/img/powered/${logo}`}
                alt={`Logo ${index + 1}`}
                className="img-fluid"
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
        }

        .marquee img {
          max-height: 50px;
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

export default Poweredby;
