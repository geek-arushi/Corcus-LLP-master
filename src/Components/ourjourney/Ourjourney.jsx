import "bootstrap/dist/css/bootstrap.min.css";

const OurJourney = () => {
  return (
    <div className="container py-5">
      {/* Title Section */}
      <div className="text-center mb-5">
        <h1 className="display-3 fw-bold" style={{ WebkitTextStroke: "2px black", color: "transparent" }}>
          Our Journey
        </h1>
      </div>

      {/* Content Section with Black Background */}
      <div className="p-4 rounded" style={{ backgroundColor: "black" }}>
        <div className="row align-items-stretch">
          <div className="col-md-4 mb-4 position-relative">
            <div className="card bg-black text-white h-100 border-0">
              <div className="card-body">
                <p className="card-text">
                  Founded with a vision to revolutionize digital advertising,
                  Corcus Studio began as a small creative hub fueled by
                  innovation and passion. Our mission was simple yet powerful:
                  to help brands unlock their full potential through strategic
                  and data-driven marketing. Over the years, we have evolved
                  into a performance marketing powerhouse, delivering
                  high-impact campaigns that drive tangible results.
                </p>
              </div>
            </div>
            <div
              className="position-absolute top-0 end-0 h-100"
              style={{ width: "2px", backgroundColor: "grey" }}
            ></div>
          </div>

          <div className="col-md-4 mb-4 position-relative">
            <div className="card bg-black text-white h-100 border-0">
              <div className="card-body">
                <p className="card-text">
                  From startups looking to establish their brand identity to
                  established businesses aiming for exponential growth, we have
                  partnered with clients across industries to create ROI-driven
                  marketing solutions. Our expertise spans SEO, social media
                  marketing, paid advertising, content creation, and brand
                  strategy, ensuring a 360-degree approach to digital success.
                </p>
              </div>
            </div>
            <div
              className="position-absolute top-0 end-0 h-100"
              style={{ width: "2px", backgroundColor: "grey" }}
            ></div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card bg-black text-white h-100 border-0">
              <div className="card-body">
                <p className="card-text">
                  At Corcus Studio, we don’t just run ads—we craft compelling
                  narratives, execute precise targeting, and optimize every
                  campaign for maximum performance. Our journey has been marked
                  by innovation, adaptability, and a relentless focus on
                  results, helping brands scale from zero to millions with
                  measurable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurJourney;