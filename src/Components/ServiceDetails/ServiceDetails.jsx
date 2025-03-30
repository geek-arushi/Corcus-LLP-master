import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const ServiceDetails = () => {

     const faqContent = [
            {title:'Why Is SEO Important For Small Business?', content:'Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis semper odio.Mauris et mollis quam. Nullam fringilla erat id ante commodo maximus'},
            {title:'How do I choose the best SEO Agency?', content:'Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis semper odio.Mauris et mollis quam. Nullam fringilla erat id ante commodo maximus'},
            {title:'Better Security And Faster Server?', content:'Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis semper odio.Mauris et mollis quam. Nullam fringilla erat id ante commodo maximus'},
            {title:'Deployment Within Few Minutes', content:'Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis semper odio.Mauris et mollis quam. Nullam fringilla erat id ante commodo maximus'},
          ]; 
    
          const accordionContentRef = useRef(null);
          const [openItemIndex, setOpenItemIndex] = useState(-1);
          const [firstItemOpen, setFirstItemOpen] = useState(true);
        
          const handleItemClick = index => {
            if (index === openItemIndex) {
              setOpenItemIndex(-1);
            } else {
              setOpenItemIndex(index);
            }
          };
          useEffect(() => {
            if (firstItemOpen) {
              setOpenItemIndex(0);
              setFirstItemOpen(false);
            }
          }, [firstItemOpen]);

    return (
        <section className="service-details-section section-padding">
            <div className="container">
                <div className="service-details-wrapper">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="details-image">
                                <img src="/assets/img/service/details-1.jpg" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-12 col-lg-4">
                            <div className="main-sidebar sticky-style">
                                <div className="single-sidebar-widget">
                                    <div className="wid-title">
                                        <h4>All Services</h4>
                                    </div>
                                    <div className="service-widget-categories">
                                        <ul>
                                            <li><Link to="/service/service-details">Web Development</Link> <span><i className="bi bi-arrow-right"></i></span></li>
                                            <li><Link to="/service/service-details">Content Marketing</Link> <span><i className="bi bi-arrow-right"></i></span></li>
                                            <li className="active"><Link to="/service/service-details">Social Media Mesketing</Link><span><i className="bi bi-arrow-right"></i></span></li>
                                            <li><Link to="/service/service-details">Affiliate Marketing</Link> <span><i className="bi bi-arrow-right"></i></span></li>
                                            <li><Link to="/service/service-details">Search Engine Marketing (SEM)</Link> <span><i className="bi bi-arrow-right"></i></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-8">
                            <div className="service-details-content">
                                <h3>
                                    Digital Marketing
                                </h3>
                                <p className="mb-4">
                                    At tempus aenean sapien torquent sed diam className efficitur mus morbi eros dictum quam augue ac laor eet ligula libero mi commodo nibh hac fermentum orci ad pharetra consequat justo duis turpis lorem elit dui consectetur magnis lacinia odio per placerat vestibulum volutpat mauris mollis primis imperdiet posu ere ex enim gravida cras congue
                                </p>
                                <p className="mb-4">
                                    pellentesque vulputate malesuada dictumst fames interdum cursus an te tellus porta ullamcorper accumsan non eu adipiscing integer venenatis sagittis arcu curae finibus ridi culus aliquam velit lobortis senectus vitae sollicitudin sit consectetuer ultricies rutrum parturient pede nisi nascetur habitant netus quisque elementum inceptos nam felis penatibus feugiat
                                </p>
                                <h3>
                                    What We Provide
                                </h3>
                                <p className="mb-5">
                                    At tempus aenean sapien torquent sed diam className efficitur mus morbi eros dictum quam augue ac laor eet ligula libero mi commodo nibh hac fermentum orci ad pharetra consequat justo duis turpis lorem elit dui consectetur magnis lacinia odio per placerat vestibulum volutpat mauris mollis primis imperdiet posu ere ex enim gravida cras congue
                                </p>
                                <div className="thumb">
                                    <img src="/assets/img/service/details-2.jpg" alt="img" />
                                </div>
                                <h3>
                                    The Challange
                                </h3>
                                <p>
                                    At tempus aenean sapien torquent sed diam className efficitur mus morbi eros dictum quam augue ac laor eet ligula libero mi commodo nibh hac fermentum orci ad pharetra consequat justo duis turpis lorem elit dui consectetur magnis lacinia odio per placerat vestibulum volutpat mauris mollis primis imperdiet posu ere ex enim gravida cras congue
                                </p>
                                <div className="details-list-items">
                                    <ul className="details-list">
                                        <li><i className="bi bi-check-circle-fill"></i>Various analysis options.</li>
                                        <li><i className="bi bi-check-circle-fill"></i>Advance Data analysis operation.</li>
                                    </ul>
                                    <ul className="details-list">
                                        <li><i className="bi bi-check-circle-fill"></i>Page Load (time, size, number of requests).</li>
                                        <li><i className="bi bi-check-circle-fill"></i>Advance Data analysis operation.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="faq-wrapper mt-5">
                                <div className="faq-accordion-items">
                                    <div className="faq-accordion">
                                        <div className="accordion" id="accordion">

                                        {faqContent.map((item, index) => (
                                            <div key={index} className={`accordion-item mb-3 ${index === openItemIndex ? "active" : "" }`}   data-wow-delay=".3s">
                                                <h5 onClick={() => handleItemClick(index)} className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                                                    {item.title}
                                                    </button>
                                                </h5>
                                                <div ref={accordionContentRef} id="faq1" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                    <div className="accordion-body">
                                                    {item.content}
                                                    </div>
                                                </div>
                                            </div>
                                            ))}

                                        </div>
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

export default ServiceDetails;