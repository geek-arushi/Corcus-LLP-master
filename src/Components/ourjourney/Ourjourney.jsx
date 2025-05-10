import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Ourjourney.css";

const OurJourney = () => {
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
                    Case Study
                </h1>
            </div>

            {/* Content Section */}
            <div className="p-4 rounded" style={{ backgroundColor: "black" }}>
                <div className="row align-items-stretch">
                    {/* Card 1 */}
                    <div className="col-md-4 mb-4">
                        <div className="card bg-black text-white h-100 border-0">
                            <div className="card-body p-4">
                                <h4 className="card-title mb-4 text-white">Fresh O Need</h4>
                                <p className="card-text mb-4 text-white">
                                    Fresh O Need struggled with ineffective marketing, unoptimized website, and marketplace issues. We resolved all challenges, improved engagement, optimized ads, and expanded their presence to global markets in just six months.
                                </p>
                                <Link to="/Foncasestudy" className="learn-more-link d-inline-block mt-2">
                                    Learn More →
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-4 mb-4">
                        <div className="card bg-black text-white h-100 border-0">
                            <div className="card-body p-4">
                                <h4 className="card-title mb-4 text-white">Fresh Super Mall</h4>
                                <p className="card-text mb-4 text-white">
                                    Fresh Super Mall struggled with franchise lead generation. We implemented targeted ads, SEO, CRM integration, and influencer marketing. Results: 300% increase in inquiries, 50% better conversion rate, and enhanced brand visibility.
                                </p>
                                <Link to="/Freshsupermall" className="learn-more-link d-inline-block mt-2">
                                    Learn More →
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-4 mb-4">
                        <div className="card bg-black text-white h-100 border-0">
                            <div className="card-body p-4">
                                <h4 className="card-title mb-4 text-white">Paidavaar</h4>
                                <p className="card-text mb-4 text-white">
                                    Paidavaar partnered with us a year ago to build its digital presence. We designed the brand logo, developed content, and introduced ‘Gayani Thai’ for farming insights, which became a major hit.
                                </p>
                                <Link to="/PaidavaarCaseStudy" className="learn-more-link d-inline-block mt-2">
                                    Learn More →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurJourney;