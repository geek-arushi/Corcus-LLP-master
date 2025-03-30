import "bootstrap/dist/css/bootstrap.min.css";

const Client = () => {
  // Different logo sets for each line
  const logosRow1 = [
    "01.png",
    "02.png",
    "03.png",
    "04.png",
    "05.png",
    "06.png",
    "07.png",
    "08.png",
    "09.png",
    "10.png",
  ];

  const logosRow2 = [
    "01.png",
    "02.png",
    "03.png",
    "04.png",
    "05.png",
    "06.png",
    "07.png",
    "08.png",
    "09.png",
    "10.png",
  ];

  return (
    <div
      className="container py-5 bg-gradient"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="text-left mb-4">
        <h1 className="display-4 fw-bold text-black">OUR</h1>
        <h2
          className="display-3 fw-bold"
          style={{
            WebkitTextStroke: "2px black",
            color: "transparent",
          }}
        >
          CLIENTS
        </h2>
        <p className="h5 text-primary text-start text-black">
          Trusted by 1000K+ customers
        </p>
      </div>

      {/* First Scrolling Line */}
      <div className="scroll-container">
        <div className="scrolling-content">
          {[...logosRow1, ...logosRow1].map((img, index) => (
            <img
              key={index}
              src={`./public/assets/img/clients/${img}`}
              alt={`Client ${index + 1} logo`}
              className="client-logo"
            />
          ))}
        </div>
      </div>

      {/* Second Scrolling Line with Space and Different Logos */}
      <div className="scroll-container reverse mt-4">
        <div className="scrolling-content">
          {[...logosRow2, ...logosRow2].map((img, index) => (
            <img
              key={index}
              src={`./public/assets/img/clients/${img}`}
              alt={`Client ${index + 11} logo`}
              className="client-logo"
            />
          ))}
        </div>
      </div>

      <div className="row mt-5 text-center">
        {[
          { target: 387, text: "Project Delivered & Counting" },
          { target: 7, text: "Years of Combined Experience" },
          { target: 65, text: "Brands Shaped" },
          { target: 4.2, text: "Trust Score" },
          { target: 14, text: "Industries Served" },
          { target: 20, text: "Countries" },
        ].map((item, index) => (
          <div className="col-24 col-md-2 mb-4" key={index}>
            <p className="display-4 fw-bold" style={{ color: "black" }}>
              {item.target}+
            </p>
            <p className="h6 text-black fw-bold">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
