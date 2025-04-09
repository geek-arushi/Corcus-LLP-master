import "bootstrap/dist/css/bootstrap.min.css";

const OurJourney = () => {
  return (
    <div className="container py-5">
      {/* Title Section - shifted to left and above the black box */}
      <h1
        className="display-3 fw-bold stroke-text mb-4"
        style={{
          WebkitTextStroke: "2px black",
          color: "transparent",
        }}
      >
        Case Study
      </h1>

      {/* Content Section with Black Background */}
      <div className="p-4 rounded" style={{ backgroundColor: "black" }}>
        <div className="row align-items-stretch">
          {/* Card 1 */}
          <div className="col-md-4 mb-4">
            <div className="card bg-black text-white h-100 border-0">
              <div className="card-body">
                <h4 className="card-title mb-3">Fresh O Need</h4>
                <p className="card-text mb-2">
                  Fresh O Need struggled with ineffective marketing, unoptimized website, and marketplace issues. We resolved all challenges, improved engagement, optimized ads, and expanded their presence to global markets in just six months.
                </p>
                <a
                  href="https://yourdomain.com/about"
                  className="learn-more-link d-inline-block mt-2"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 mb-4">
            <div className="card bg-black text-white h-100 border-0">
              <div className="card-body">
                <h4 className="card-title mb-3">Fresh Super Mall</h4>
                <p className="card-text mb-2">
                  Fresh Super Mall struggled with franchise lead generation. We implemented targeted ads, SEO, CRM integration, and influencer marketing. Results: 300% increase in inquiries, 50% better conversion rate, and enhanced brand visibility. Our strategy fueled their expansion.
                </p>
                <a
                  href="https://yourdomain.com/about"
                  className="learn-more-link d-inline-block mt-2"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 mb-4">
            <div className="card bg-black text-white h-100 border-0">
              <div className="card-body">
                <h4 className="card-title mb-3">Paidavaar</h4>
                <p className="card-text mb-2">
                  Paidavaar partnered with us a year ago to build its digital presence. We designed the brand logo, developed content, and introduced ‘Gayani Thai’ for farming insights, which became a major hit. Our efforts increased engagement, strengthened brand recognition, and established Paidavaar as a trusted name in agriculture.
                </p>
                <a
                  href="https://yourdomain.com/about"
                  className="learn-more-link d-inline-block mt-2"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx="true">{`
        .stroke-text {
          -webkit-text-stroke: 2px black;
          color: transparent;
          font-weight: bold;
        }

        .learn-more-link {
          color: #eeb200;
          text-decoration: underline;
          transition: color 0.3s ease;
        }

        .learn-more-link:hover {
          color: white;
        }

        @media (max-width: 768px) {
          .stroke-text {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default OurJourney;
