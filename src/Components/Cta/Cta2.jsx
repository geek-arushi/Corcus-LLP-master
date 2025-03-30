import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { Link } from "react-router-dom";

const Cta2 = () => {

        useEffect(() => {
            loadBackgroudImages();
        }, []);

    return (
        <section className="cta-contact-section fix section-padding">
            <div className="container">
                <div className="cta-contact-wrapper bg-cover" data-background="/assets/img/cta-contact-bg.jpg">
                    <div className="cta-image wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.3s">
                        <img src="/assets/img/contact-img.png" alt="img" />
                    </div>
                    <div className="section-title mb-0">
                        <div className="sub-title bg-color-3 wow fadeInUp">
                            <span>Contact US</span>
                        </div>
                        <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                            24/7 Expert Hosting Support <br/> Our Customers Love
                        </h2>
                    </div>
                    <div className="main-button wow fadeInUp" data-wow-delay=".5s">
                        <Link to="/contact"> <span className="theme-btn">Talk to a Specialist </span><span className="arrow-btn"><i className="bi bi-arrow-up-right"></i></span></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta2;