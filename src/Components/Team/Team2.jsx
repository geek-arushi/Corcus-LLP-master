import { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Team2 = () => {

     const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,        
        responsive: [
            {
            breakpoint: 1399,
            settings: {
                slidesToShow: 2,
            }
            },
            {
            breakpoint: 1199,
            settings: {
                slidesToShow: 1,
            }
            },{
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
            }
            }
        ]
        };  

        const sliderRef = useRef(null);

        const next = () => {
        sliderRef.current.slickNext();
        };
    
        const previous = () => {
        sliderRef.current.slickPrev();
        }; 

    const teamContent = [
        {img:'/assets/img/team/01.jpg', name:'Reful Miya', content:'CO-Leader',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team/02.jpg', name:'Shikhon Islam', content:'Web Developer',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team/03.jpg', name:'Abdullah Islam', content:'Web Development',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team/04.jpg', name:'Leslie Alexander', content:'Nursing Assistant',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
      ];

    return (
        <section className="team-section-33 section-padding">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="team-left-content sticky-style ">
                            <div className="section-title">
                                <div className="sub-title bg-color-2 wow fadeInUp">
                                    <span>Our EXPART TEAM</span>
                                </div>
                                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                    Use SEO to Drive Growth <br/> at Your Business
                                </h2>
                            </div>
                            <div className="array-button wow fadeInUp" data-wow-delay=".5s">
                                <button onClick={previous} className="array-prev"><i className="bi bi-arrow-up"></i></button>
                                <button onClick={next} className="array-next"><i className="bi bi-arrow-down"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="swiper team-slider">
                            <div className="swiper-wrapper cs_slider_gap_30">
                            <Slider ref={sliderRef} {...settings}>
                            {teamContent.map((item, i) => (
                                <div key={i} className="swiper-slide">
                                    <div className="team-card-items mt-0">
                                        <div className="team-image">
                                            <img src={item.img} alt="img" />
                                        </div>
                                        <div className="team-content">
                                            <h3><a href="team-details.html">{item.name}</a></h3>
                                            <p>{item.content}</p>
                                        </div>
                                        <div className="icon-shape">
                                            <img src="/assets/img/team/icon-shape.png" alt="img" />
                                            <div className="social-profile">
                                                <ul>
                                                <li><Link to={item.content}><i className="bi bi-instagram"></i></Link></li>
                                                <li><Link to={item.content}><i className="bi bi-facebook"></i></Link></li>
                                                <li><Link to={item.content}><i className="bi bi-twitter-x"></i></Link></li>
                                                <li><Link to={item.content}><i className="bi bi-linkedin"></i></Link></li>
                                                </ul>
                                                <span className="plus-btn"><i className="bi bi-share"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 ))}
                                 </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team2;