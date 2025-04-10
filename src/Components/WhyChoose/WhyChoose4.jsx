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

                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                    We’re not just a marketing agency
                                    </h2>
                                </div>
                                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                we’re your growth partner. From strategy to execution, everything we do is built around your success. Our focus on integrity, simplicity, performance, and innovation ensures your brand not only stands out but scales with impact. With data-driven insights, creative thinking, and a dedicated team, we deliver solutions that work — and results that matter.
                                </p>
                                <div className="list-items wow fadeInUp" data-wow-delay=".3s">
                                </div>
                                <div className="main-button wow fadeInUp" data-wow-delay=".5s">
                                    <Link to="/Contact"> <span className="theme-btn"> EXPLORE MORE </span><span className="arrow-btn"><i className="bi bi-arrow-up-right"></i></span></Link>
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