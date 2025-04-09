import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { Link } from "react-router-dom";

const WhyChoose4 = () => {

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <section className="team-section fix section-padding bg-cover" data-background="/assets/img/service/service.jpg">
            
            <div className="container">
                <div className="team-wrapper style-4">
                    <div className="row g-4 align-items-center">
                        <div className="col-xl-6">
                            <div className="results-left-items">
                               <div className="content">
                                    <h2><span className="count">500</span>+</h2>
                                    <h3>Total Project</h3>
                                    <p>Lorem dolor amet consectetur adipiscing any more elit.</p>
                               </div>
                               <div className="thumb">
                                    <img src="/assets/img/service/gap-shape.png" alt="img" />
                               </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="team-content">
                                <div className="section-title">
                                    <div className="sub-title bg-color-2 wow fadeInUp">
                                        <span>Best SEO results</span>
                                    </div>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        Let’s make something awesome together
                                    </h2>
                                </div>
                                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                    Every pleasure is to be welcomed and every pain avoided. certain circumstances and owing to the claims welcomed and every pain avoided certain circumstances
                                </p>
                                <div className="list-items wow fadeInUp" data-wow-delay=".3s">
                                </div>
                                <div className="main-button wow fadeInUp" data-wow-delay=".5s">
                                    <Link to="/team"> <span className="theme-btn"> EXPLORE MORE </span><span className="arrow-btn"><i className="bi bi-arrow-up-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose4;