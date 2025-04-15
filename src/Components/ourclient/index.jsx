import "bootstrap/dist/css/bootstrap.min.css";

const Client = () => {
  const logosRow1 = [
    "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png",
    "9.png", "10.png", "11.png", "12.png", "13.png", "14.png", "15.png", "16.png",
    "17.png", "18.png", "19.png", "20.png", "21.png", "22.png", "23.png", "24.png",
    "25.png", "26.png", "27.png", "28.png", "29.png", "30.png", "31.png", "32.png",
    "33.png", "34.png", "35.png", "37.png", "38.png", "39.png", "40.png",
  ];

  const logosRow2 = [
    "41.png", "42.png", "43.png", "44.png", "45.png", "46.png", "47.png", "48.png",
    "49.png", "50.png", "51.png", "52.png", "53.png", "54.png", "55.png", "56.png",
    "57.png", "58.png", "59.png", "60.png", "61.png", "62.png", "63.png", "64.png",
    "65.png", "66.png", "67.png", "68.png", "69.png", "70.png", "71.png", "72.png",
    "73.png", "74.png", "75.png", "76.png", "77.png", "78.png", "79.png", "80.png",
  ];

  return (
    <div
      className="container bg-gradient"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="text-left mt-4"> {/* reduced space here */}
        <h2 className="display-4 fw-bold text-black"></h2>
        <h3
          className="display-3 fw-bold"
          style={{
            WebkitTextStroke: "2px black",
            color: "transparent",
          }}
        >
          Our CLIENTS
        </h3>
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
              src={`/assets/img/brand1/${img}`}
              alt={`Client ${index + 1} logo`}
              className="client-logo"
            />
          ))}
        </div>
      </div>

      {/* Second Scrolling Line */}
      <div className="scroll-container reverse mt-4">
        <div className="scrolling-content">
          {[...logosRow2, ...logosRow2].map((img, index) => (
            <img
              key={index}
              src={`./assets/img/brand1/${img}`}
              alt={`Client ${index + 11} logo`}
              className="client-logo"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Client;
