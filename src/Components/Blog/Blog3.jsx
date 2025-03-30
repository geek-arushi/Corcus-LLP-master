import { Link } from "react-router-dom";

const Blog3 = () => {

    const blogContent = [
        {img:'/assets/img/news/post-1.jpg', title:'Choose The Best IT Service Company in the City.', content:'Pellentesque egestas rutrum nibh facilisis ultrices. Phasellus in magna ut orci malesuada the sollicitudin. Aenean faucibus scelerisque convallis. Quisque interdum mauris id nunc molestie tincidunt erat gravida. Nullam dui libero, mollis ac quam et, venenatis.'},
        {img:'/assets/img/news/post-2.jpg', title:'Keep Your Business Safe Ensure High Availability', content:'Pellentesque egestas rutrum nibh facilisis ultrices. Phasellus in magna ut orci malesuada the sollicitudin. Aenean faucibus scelerisque convallis. Quisque interdum mauris id nunc molestie tincidunt erat gravida. Nullam dui libero, mollis ac quam et, venenatis.'},
        {img:'/assets/img/news/post-3.jpg', title:'Tackling the Changes of Retell Industry', content:'Pellentesque egestas rutrum nibh facilisis ultrices. Phasellus in magna ut orci malesuada the sollicitudin. Aenean faucibus scelerisque convallis. Quisque interdum mauris id nunc molestie tincidunt erat gravida. Nullam dui libero, mollis ac quam et, venenatis.'},
      ]; 

    return (
            <section className="news-standard-section section-padding">
            <div className="container">
                <div className="row g-4">
                    <div className="col-12 col-lg-8">
                        <div className="news-standard-wrapper">
                        {blogContent.map((item, i) => (
                            <div key={i} className="news-standard-items">
                                <div className="thumb">
                                    <img src={item.img} alt="img" />
                                </div>
                                <div className="content">
                                    <ul className="post-cat">
                                        <li>
                                        <i className="bi bi-person"></i>
                                            By Admin
                                        </li>
                                        <li>
                                        <i className="bi bi-chat"></i>
                                            0 Comments
                                        </li>
                                    </ul>
                                    <h3><Link to="/blog/blog-details">{item.title}</Link></h3>
                                    <p>
                                    {item.content}
                                    </p>
                                    <Link to="/blog/blog-details" className="theme-btn">Read More <i className="bi bi-arrow-right"></i></Link>
                                </div>
                            </div>
                             ))}  

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
                                                <i className="bi bi-calendar"></i>
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
                                                    <i className="fa-solid fa-calendar-days"></i>
                                                    23 Feb, 2024
                                                </li>
                                            </ul>
                                            <h6>
                                                <a href="news-details.html">
                                                    Tackling the Changes of <br/> Retell Industry
                                                </a>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h4>Tag</h4>
                                </div>
                                <div className="news-widget-categories">
                                    <div className="tagcloud">
                                        <a href="#">Security</a>     
                                        <a href="#">Business</a>
                                        <a href="#">Digital</a>
                                        <a href="#">Technology</a>
                                        <a href="#">Change</a>
                                        <a href="#">Video</a>
                                        <a href="#">UI/UX Desing</a>
                                        <a href="#">Startup</a>
                                        <a href="#">Services</a>
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

export default Blog3;