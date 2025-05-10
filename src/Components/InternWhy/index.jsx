import "bootstrap/dist/css/bootstrap.min.css";


const InternWhyStrokeText = () => {
  return (
    <div className="container py-5">
      {/* Title Section */}
      <div className="text-left mb-5">
        <h1
          className="display-3 fw-bold stroke-text"
          style={{
            WebkitTextStroke: "2px black",
            color: "transparent",
          }}
        >
          Why it is Important
        </h1>
      </div>

      {/* Content Section */}
      <div className="p-4 rounded" style={{ backgroundColor: "black" }}>
        <div className="row align-items-stretch">
          {/* Card 1 */}
          <div className="col-md-4 mb-4">
            <div className="card bg-black text-white h-100 border-0">
              <div className="card-body p-4">
                <h1 className="card-title mb-3 text-white">Real-world Experience</h1>
                <p className="card-text mb-6 text-white">
                  At Corcus Studio, our internship program goes beyond basic training. You'll gain real-world experience by working on live projects, mastering in-demand skills like ReactJS, WordPress, Shopify, WooCommerce, and AI tools. This hands-on approach ensures you're ready to tackle real industry challenges.
                </p>
                <a
                  href="https://corcusstudio.in/case-study-fresh-o-need-a-digital-transformation-success-story/"
                  className="learn-more-link d-inline-block mt-2"
                >
                 
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 mb-4">
            <div className="card bg-black text-white h-100 border-0">
              <div className="card-body p-4">
                <h2 className="card-title mb-4 text-white">Professional Networking</h2>
                <p className="card-text mb-6 text-white">
                 Our program also helps you build a strong professional portfolio, connect with industry experts, and expand your network. You'll gain practical insights, personalized mentorship, and the confidence to stand out in the competitive tech landscape.
                </p>
                <a
                  href="https://corcusstudio.in/fresh-super-mall-boosting-franchise-leads-through-digital-marketing/"
                  className="learn-more-link d-inline-block mt-2"
                >
                  
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 mb-4">
            <div className="card bg-black text-white h-100 border-0">
              <div className="card-body p-4">
                <h2 className="card-title mb-4 text-white">Career Support</h2>
                <p className="card-text mb-2 text-white">
                  With flexible online and offline sessions, resume building, interview preparation, and career support, we provide all the tools you need for a successful tech career. Join Corcus Studio's Internship Program and take the first step towards becoming a tech leader.
                </p>
                <a
                  href="https://corcusstudio.in/paidavaar-a-year-of-transformative-digital-marketing/"
                  className="learn-more-link d-inline-block mt-2"
                >
                 
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternWhyStrokeText;
