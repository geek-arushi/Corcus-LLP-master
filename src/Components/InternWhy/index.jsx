import "bootstrap/dist/css/bootstrap.min.css";

const InternWhyStrokeText = () => {
  return (
    <div className="container py-5">
      {/* Content Section */}
      <div
        className="container py-5" 
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <div
          className="p-5 rounded"
          style={{
            backgroundColor: "black",
            borderRadius: "12px",
          }}
        >
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="card bg-black text-white h-100 border-0">
                <div className="card-body d-flex flex-column p-4">
                  {/* Image */}
                  <div className="mb-4">
                    <img 
                      src="/images/internship-experience.jpg" 
                      alt="Real-world experience" 
                      className="img-fluid rounded" 
                      style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                    />
                  </div>
                  {/* Paragraph */}
                  <p className="card-text text-white text-start">
                    At Corcus Studio, our internship program goes beyond basic training. You'll gain real-world experience by working on live projects, mastering in-demand skills like ReactJS, WordPress, Shopify, WooCommerce, and AI tools. This hands-on approach ensures you're ready to tackle real industry challenges.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="card bg-black text-white h-100 border-0">
                <div className="card-body d-flex flex-column p-4">
                  {/* Image */}
                  <div className="mb-4">
                    <img 
                      src="/images/networking.jpg" 
                      alt="Professional networking" 
                      className="img-fluid rounded" 
                      style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                    />
                  </div>
                  {/* Paragraph */}
                  <p className="card-text text-white text-start">
                    Our program also helps you build a strong professional portfolio, connect with industry experts, and expand your network. You'll gain practical insights, personalized mentorship, and the confidence to stand out in the competitive tech landscape.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="card bg-black text-white h-100 border-0">
                <div className="card-body d-flex flex-column p-4">
                  {/* Image */}
                  <div className="mb-4">
                    <img 
                      src="/images/career-support.jpg" 
                      alt="Career support" 
                      className="img-fluid rounded" 
                      style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                    />
                  </div>
                  {/* Paragraph */}
                  <p className="card-text text-white text-start">
                    With flexible online and offline sessions, resume building, interview preparation, and career support, we provide all the tools you need for a successful tech career. Join Corcus Studio's Internship Program and take the first step towards becoming a tech leader.
                  </p>
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
