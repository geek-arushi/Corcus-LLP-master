import "bootstrap/dist/css/bootstrap.min.css";

const InternWhyStrokeText = () => {
  return (
    <div className="container py-5">
      {/* Title Section */}
      <div
        className="container py-8"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <div className="d-flex flex-column flex-sm-row align-items-center mb-4 gap-3">
          <h1
            className="mb-0"
            style={{
              fontSize: "4rem",
              fontWeight: "600",
              WebkitTextStroke: "1px #000", // Stroke style
              color: "transparent", // Remove fill
              padding: "40px 20px",
              borderRadius: "8px",
              margin: "0",
            }}
          >
           Why it is Important
          </h1>
          <p className="mb-0" style={{ fontSize: "0.95rem", maxWidth: "600px" }}>
            At our digital marketing agency, we offer a range of services to help
            businesses grow and succeed online. These services include:
          </p>
        </div>

        {/* Content Section */}
        <div
          className="p-4 rounded"
          style={{
            backgroundColor: "black",
            padding: "40px 20px",
            borderRadius: "8px",
          }}
        >
          <div className="row align-items-stretch">
            {/* Card 1 */}
            <div className="col-md-4 mb-4">
              <div className="card bg-black text-white h-100 border-0">
                <div className="card-body p-4">
                  <h4 className="card-title mb-4 text-white">Fresh O Need</h4>
                  <p className="card-text mb-4 text-white">
                    Fresh O Need struggled with ineffective marketing, unoptimized
                    website, and marketplace issues. We resolved all challenges,
                    improved engagement, optimized ads, and expanded their
                    presence to global markets in just six months.
                  </p>
                  <a
                    href="https://corcusstudio.in/case-study-fresh-o-need-a-digital-transformation-success-story/"
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
                <div className="card-body p-4">
                  <h4 className="card-title mb-4 text-white">Fresh Super Mall</h4>
                  <p className="card-text mb-4 text-white">
                    Fresh Super Mall struggled with franchise lead generation. We
                    implemented targeted ads, SEO, CRM integration, and influencer
                    marketing. Results: 300% increase in inquiries, 50% better
                    conversion rate, and enhanced brand visibility.
                  </p>
                  <a
                    href="https://corcusstudio.in/fresh-super-mall-boosting-franchise-leads-through-digital-marketing/"
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
                <div className="card-body p-4">
                  <h4 className="card-title mb-4 text-white">Paidavaar</h4>
                  <p className="card-text mb-4 text-white">
                    Paidavaar partnered with us a year ago to build its digital
                    presence. We designed the brand logo, developed content, and
                    introduced ‘Gayani Thai’ for farming insights, which became a
                    major hit.
                  </p>
                  <a
                    href="https://corcusstudio.in/paidavaar-a-year-of-transformative-digital-marketing/"
                    className="learn-more-link d-inline-block mt-2"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternWhyStrokeText;
