import { Link } from "react-router-dom";

const Team3 = () => {

    const teamContent = [
        {img:'/assets/img/team/01.jpg', name:'Reful Miya', content:'CO-Leader',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team/02.jpg', name:'Shikhon Islam', content:'Web Developer',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team/03.jpg', name:'Abdullah Islam', content:'Web Development',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team/04.jpg', name:'Leslie Alexander', content:'Nursing Assistant',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team/05.jpg', name:'Reful Miya', content:'CO-Leader',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team/06.jpg', name:'Shikhon Islam', content:'Web Developer',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team/07.jpg', name:'Abdullah Islam', content:'Web Development',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team/08.jpg', name:'Leslie Alexander', content:'Nursing Assistant',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
      ];

    return (
        <section className="team-section-3 fix section-padding">
            <div className="container-fluid">
                <div className="row g-4">

                {teamContent.map((item, i) => (
                    <div key={i} className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                        <div className="team-card-items mt-0">
                            <div className="team-image">
                            <img src={item.img} alt="img" />
                            </div>
                            <div className="team-content">
                                <h3>{item.name}</h3>
                                <p>{item.content}</p>
                            </div>
                            <div className="icon-shape">
                                {/* <img src="/assets/img/team/icon-shape.png" alt="img" /> */}
                                {/* <div className="social-profile">
                                    <ul>
                                    <li><Link to={item.content}><i className="bi bi-instagram"></i></Link></li>
                                        <li><Link to={item.content}><i className="bi bi-facebook"></i></Link></li>
                                        <li><Link to={item.content}><i className="bi bi-twitter-x"></i></Link></li>
                                        <li><Link to={item.content}><i className="bi bi-linkedin"></i></Link></li>
                                    </ul>
                                    <span className="plus-btn"><i className="bi bi-share"></i></span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                     ))}


                </div>
            </div>
        </section>
    );
};

export default Team3;