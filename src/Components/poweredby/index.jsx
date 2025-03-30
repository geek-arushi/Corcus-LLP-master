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

  return (
    <div className="bg-black py-5 text-center">
      <h4 className="text-white mb-4">Partner with</h4>
      <div className="container">
        <div className="row justify-content-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="col-6 col-md-4 col-lg-2 d-flex justify-content-center mb-3"
            >
              <img
                src={`/assets/img/powered/${logo}`}
                alt={`Logo ${index + 1}`}
                className="img-fluid"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Poweredby;
