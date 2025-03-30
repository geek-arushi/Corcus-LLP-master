import { Link } from "react-router-dom";

const BlogDetails = () => {
    return (
        <section className="news-details-section section-padding">
            <div className="container">
                <div className="news-details-wrapper">
                    <div className="row g-4">
                        <div className="col-12 col-lg-8">
                            <div className="news-post-details">
                                <div className="single-news-post">
                                    <div className="post-featured-thumb">
                                        <img src="/assets/img/news/details-1.jpg" alt="" />
                                    </div>
                                    <div className="post-content">
                                        <ul className="post-list d-flex align-items-center">
                                            <li>
                                                <i className="fa-regular fa-user"></i>
                                                By Admin
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-calendar-days"></i>
                                                18 Dec, 2024
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-tag"></i>
                                                Technology
                                            </li>
                                        </ul>
                                        <h3>Choose The Best IT Service Company in the City.</h3>
                                        <p className="mb-3">
                                            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.
                                        </p>
                                        <p className="mb-3">
                                            The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu In hac habitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat.
                                        </p>
                                        <p className="mt-4 mb-5">
                                            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros.
                                        </p>
                                        <div className="row g-4">
                                            <div className="col-lg-6">
                                                <div className="details-image">
                                                    <img src="/assets/img/news/details-2.jpg" alt="img" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="details-image">
                                                    <img src="/assets/img/news/details-3.jpg" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hilight-text mt-4">
                                            <p>
                                                Pellentesque sollicitudin congue dolor non aliquam. Morbi volutpat, nisi vel ultricies urnacondimentum, sapien neque lobortis tortor, quis efficitur mi ipsum eu metus. Praesent eleifend orci sit amet est vehicula.
                                            </p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                                <path d="M7.71428 20.0711H0.5V5.64258H14.9286V20.4531L9.97665 30.3568H3.38041L8.16149 20.7947L8.5233 20.0711H7.71428Z" stroke="#6A47ED"></path>
                                                <path d="M28.2846 20.0711H21.0703V5.64258H35.4989V20.4531L30.547 30.3568H23.9507L28.7318 20.7947L29.0936 20.0711H28.2846Z" stroke="#6A47ED"></path>
                                            </svg>
                                        </div>
                                        <p className="pt-5">
                                            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.
                                        </p>
                                    </div>
                                </div>
                                <div className="row tag-share-wrap mt-4 mb-5">
                                    <div className="col-lg-8 col-12">
                                        <div className="tagcloud"> 
                                            <span>Tags:</span>                                  
                                            <a href="news-details.html">Security</a>
                                            <a href="news-details.html">UI/UX Desing</a>
                                            <a href="news-details.html">Digital</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                                        <div className="social-share">
                                            <span className="me-3">Share:</span>
                                            <a href="#"><i className="bi bi-facebook"></i></a>
                                        <a href="#"><i className="bi bi-twitter"></i></a>
                                        <a href="#"><i className="bi bi-youtube"></i></a>
                                        <a href="#"><i className="bi bi-linkedin"></i></a>                                 
                                        </div>
                                    </div>
                                </div>
                                <div className="comments-area">
                                    <div className="comments-heading">
                                        <h3>02 Comments</h3>
                                    </div>
                                    <div className="blog-single-comment d-flex gap-4 pt-4 pb-5">
                                        <div className="image">
                                            <img src="/assets/img/news/comment-1.png" alt="image" />
                                        </div>
                                        <div className="content">
                                            <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                                                <div className="con">
                                                    <h5><a href="news-details.html">Leslie Alexander</a></h5>
                                                    <span>February 10, 2024 at 2:37 pm</span>
                                                </div>
                                                <a href="news-details.html" className="reply">Reply</a>
                                            </div>
                                            <p className="mt-30 mb-4">
                                                Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi architecto var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy
                                            </p>
                                        </div>
                                    </div>
                                    <div className="blog-single-comment d-flex gap-4 pt-4 pb-5">
                                        <div className="image">
                                            <img src="/assets/img/news/comment-2.png" alt="image" />
                                        </div>
                                        <div className="content">
                                            <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                                                <div className="con">
                                                    <h5><a href="news-details.html">Ralph Edwards</a></h5>
                                                    <span>February 10, 2024 at 2:37 pm</span>
                                                </div>
                                                <a href="news-details.html" className="reply">Reply</a>
                                            </div>
                                            <p className="mt-30 mb-4">
                                                Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi architecto var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-form-wrap pt-5">
                                    <h3>Leave a Comment</h3>
                                    <form action="#" id="contact-form" method="POST">
                                        <div className="row g-4">
                                            <div className="col-lg-6">
                                                <div className="form-clt">
                                                    <span>Your Name*</span>
                                                    <input type="text" name="name" id="name" placeholder="Your Name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-clt">
                                                    <span>Your Email*</span>
                                                    <input type="text" name="email" id="email2" placeholder="Your Email" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-clt">
                                                    <span>Message*</span>
                                                    <textarea name="message" id="message" placeholder="Write Message"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <button type="submit" className="theme-btn ">
                                                    post comment<i className="fa-solid fa-arrow-right-long"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="main-sidebar sticky-style">
                                <div className="single-sidebar-widget">
                                    <div className="wid-title">
                                        <h4>Search</h4>
                                    </div>
                                    <div className="search-widget">
                                        <form action="#">
                                            <input type="text" placeholder="Search here" />
                                            <button type="submit"><i className="bi bi-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                                <div className="single-sidebar-widget">
                                    <div className="wid-title">
                                        <h4>All Services</h4>
                                    </div>
                                    <div className="news-widget-categories">
                                        <ul>
                                        <li><Link to="/blog/blog-details">Digital Agency</Link> <span>(7)</span></li>
                                        <li><Link to="/blog/blog-details">Business</Link> <span>(4)</span></li>
                                        <li className="active"><Link to="/blog/blog-details">Digital Product</Link> <span>(5)</span></li>
                                        <li><Link to="/blog/blog-details">Social Marketing</Link> <span>(3)</span></li>
                                        <li><Link to="/blog/blog-details">System</Link> <span>(6)</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="single-sidebar-widget">
                                    <div className="wid-title">
                                        <h3>Recent Post</h3>
                                    </div>
                                    <div className="recent-post-area">
                                        <div className="recent-items">
                                            <div className="recent-thumb">
                                                <img src="/assets/img/news/pp3.jpg" alt="img" />
                                            </div>
                                            <div className="recent-content">
                                                <ul>
                                                    <li>
                                                        <i className="fa-solid fa-calendar-days"></i>
                                                        14 Feb, 2024
                                                    </li>
                                                </ul>
                                                <h6>
                                                    <Link to="/blog/blog-details">
                                                        Which Yoga Hybrid is Right <br/> for Your?
                                                    </Link>
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="recent-items">
                                            <div className="recent-thumb">
                                                <img src="/assets/img/news/pp4.jpg" alt="img" />
                                            </div>
                                            <div className="recent-content">
                                                <ul>
                                                    <li>
                                                    <i className="bi bi-calendar"></i>
                                                        12 Mar, 2024
                                                    </li>
                                                </ul>
                                                <h6>
                                                <Link to="/blog/blog-details">
                                                        Keep Your Business Safe <br/> Ensure High Availability
                                                        </Link>
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="recent-items">
                                            <div className="recent-thumb">
                                                <img src="/assets/img/news/pp5.jpg" alt="img" />
                                            </div>
                                            <div className="recent-content">
                                                <ul>
                                                    <li>
                                                    <i className="bi bi-calendar"></i>
                                                        23 Feb, 2024
                                                    </li>
                                                </ul>
                                                <h6>
                                                <Link to="/blog/blog-details">
                                                        Tackling the Changes of <br/> Retell Industry
                                                        </Link>
                                                </h6>
                                            </div>
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

export default BlogDetails;