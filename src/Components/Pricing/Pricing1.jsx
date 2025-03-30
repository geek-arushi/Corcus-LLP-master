import { useState } from "react";
import PricingCard from "../Card/PricingCard";

const Pricing1 = ({CoulmnClass}) => {

    const [isActive, setIsActive] = useState('monthly');

    return (
        <section className={CoulmnClass}>
            <div className="left-shape float-bob-y">
                <img src="/assets/img/pricing-left.png" alt="img" />
            </div>
            <div className="right-shape float-bob-y">
                <img src="/assets/img/pricing-right.png" alt="img" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="pricing-content">
                            <div className="section-title">
                                <div className="sub-title bg-color-2 wow fadeInUp">
                                    <span>OUR PRICNG PLAN</span>
                                </div>
                                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                    Our awesome <br/> Pricing Plan
                                </h2>
                            </div>
                            <div className="pricing-tab-header mt-4 mt-md-0">
                                <div className="arrow-shape">
                                    <img src="/assets/img/arrow.png" alt="img" />
                                </div>
                                <ul className="nav" role="tablist">
                                    <li className={`nav-item wow fadeInUp ${isActive === 'monthly' ? 'active' : ''}`} onClick={() => setIsActive('monthly')}  data-wow-delay=".3s" role="presentation">
                                        <a href="#monthly" data-bs-toggle="tab" className="nav-link active" aria-selected="true" role="tab">
                                        Monthly
                                        </a>
                                    </li>
                                    <li className={`nav-item ${isActive === 'yearly' ? 'active' : ''}`} onClick={() => setIsActive('yearly')}  data-wow-delay=".5s" role="presentation">
                                        <a href="#yearly" data-bs-toggle="tab" className="nav-link" aria-selected="false" role="tab" tabIndex="-1">
                                        Yearly
                                        </a>
                                    </li>
                                </ul>
                                <div className="save-text">
                                    Save 25%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="tab-content">
                            <div className={`tab-pane ${isActive === 'monthly' ? 'active' : ''}`} id="monthly"  role="tabpanel">
                                <div className="row g-4">
                                    <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <PricingCard
                                        addclass="pricing-box-items"
                                        title="Premium Plans"
                                        price="$99"
                                        month="Month"
                                        FeatureList={[
                                            "100 GB SSD Storage",
                                            "Weekly Backups",
                                            "Unlimited Free SSL",
                                            "24/7 system Monitoring",
                                            "Free Domain ($9.99 value)",
                                            "Dedicated IP Address",
                                            "20+ Payment Methods",
                                        ]}
                                        btnurl="/pricing"
                                        btnname="Get Started Now"
                                    ></PricingCard>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                    <PricingCard
                                        addclass="pricing-box-items style-2"
                                        title="Extended Plan"
                                        price="$149"
                                        month="Month"
                                        FeatureList={[
                                            "100 GB SSD Storage",
                                            "Weekly Backups",
                                            "Unlimited Free SSL",
                                            "24/7 system Monitoring",
                                            "Free Domain ($9.99 value)",
                                            "Dedicated IP Address",
                                            "20+ Payment Methods",
                                        ]}
                                        btnurl="/pricing"
                                        btnname="Get Started Now"
                                    ></PricingCard>
                                    </div>
                                </div>
                            </div>
                            <div id="yearly" className={`tab-pane ${isActive === 'yearly' ? 'active' : ''}`} role="tabpanel">
                                <div className="row g-4">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                    <PricingCard
                                        addclass="pricing-box-items"
                                        title="Premium Plans"
                                        price="$299"
                                        month="Month"
                                        FeatureList={[
                                            "100 GB SSD Storage",
                                            "Weekly Backups",
                                            "Unlimited Free SSL",
                                            "24/7 system Monitoring",
                                            "Free Domain ($9.99 value)",
                                            "Dedicated IP Address",
                                            "20+ Payment Methods",
                                        ]}
                                        btnurl="/pricing"
                                        btnname="Get Started Now"
                                    ></PricingCard>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                    <PricingCard
                                        addclass="pricing-box-items style-2"
                                        title="Extended Plan"
                                        price="$349"
                                        month="Month"
                                        FeatureList={[
                                            "100 GB SSD Storage",
                                            "Weekly Backups",
                                            "Unlimited Free SSL",
                                            "24/7 system Monitoring",
                                            "Free Domain ($9.99 value)",
                                            "Dedicated IP Address",
                                            "20+ Payment Methods",
                                        ]}
                                        btnurl="/pricing"
                                        btnname="Get Started Now"
                                    ></PricingCard>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing1;