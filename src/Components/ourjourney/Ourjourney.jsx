import "bootstrap/dist/css/bootstrap.min.css";

const OurJourney = () => {
  return (
    <div className="container py-5">
      {/* Title Section */}
      <div className="text-center mb-5">
        <h1 className="display-3 fw-bold" style={{ WebkitTextStroke: "2px black", color: "transparent" }}>
        Case study        </h1>
      </div>

      {/* Content Section with Black Background */}
      <div className="p-4 rounded" style={{ backgroundColor: "black" }}>
        <div className="row align-items-stretch">
          <div className="col-md-4 mb-4 position-relative">
            <div className="card bg-black text-white h-100 border-0">
              <div className="card-body">
              <h4 className="card-title mb-3">Fresh o Need</h4>
                <p className="card-text text-white">
                Fresh O Need struggled with ineffective marketing, unoptimized website, and marketplace issues. We resolved all challenges, improved engagement, optimized ads, and expanded their presence to global markets in just six months.
                </p>
                <a 
            href="https://yourdomain.com/about" 
            className="text-warning text-decoration-underline mt-2 d-inline-block"
          >
            Learn More →
          </a>
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
              <h4 className="card-title mb-3">Fresh Super Mall</h4>
                <p className="card-text text-white">
                Fresh Super Mall struggled with franchise lead generation. We implemented targeted ads, SEO, CRM integration, and influencer marketing. Results: 300% increase in inquiries, 50% better conversion rate, and enhanced brand visibility. Our strategy fueled their expansion. Contact us to grow your business!
                </p>
                <a 
            href="https://yourdomain.com/about" 
            className="text-warning text-decoration-underline mt-2 d-inline-block"
          >
            Learn More →
          </a>
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
              <h4 className="card-title mb-3">Paidavaar</h4>
                <p className="card-text text-white">
                Paidavaar partnered with us a year ago to build its digital presence. We designed the brand logo, developed content, and introduced ‘Gayani Thai’ for farming insights, which became a major hit. Our efforts increased engagement, strengthened brand recognition, and established Paidavaar as a trusted name in agriculture.
                </p>
                <a 
            href="https://yourdomain.com/about" 
            className="text-warning text-decoration-underline mt-2 d-inline-block"
          >
            Learn More →
          </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurJourney;