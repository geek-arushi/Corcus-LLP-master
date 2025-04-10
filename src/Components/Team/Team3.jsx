import { Link } from "react-router-dom";

const Team3 = () => {

    const teamContent = [
        {img:'/assets/img/team/01.jpg', name:'Ayush Anand', content:'CEO FOUNDER '},
        {img:'/assets/img/team/02.jpg', name:'Vidya Gupta', content:'Co-Founder'},
        {img:'/assets/img/team/03.jpg', name:'Animesh Anand', content:'Co-Founder'},
        {img:'/assets/img/team/04.jpg', name:'Tanisha', content:'CFO'},
        {img:'/assets/img/team/05.jpg', name:'Durganshi', content:'Social Media Manager'},
        {img:'/assets/img/team/06.jpg', name:'Abhishek Raj', content:'Sr. Software Developer / Video Editor'},
        {img:'/assets/img/team/07.jpg', name:'Arushi Singh', content:'Software Developer'},
        {img:'/assets/img/team/08.jpg', name:'Ujjwal', content:'Web Developer'},
        {img:'/assets/img/team/09.jpg', name:'Mayank', content:'Team Leader / Content Writer'},
        {img:'/assets/img/team/10.jpg', name:'Deepak', content:'Graphic Designer'},
        {img:'/assets/img/team/11.jpg', name:'Sujit', content:'Graphic Designer'},
        {img:'/assets/img/team/12.jpg', name:'Alka', content:'Graphic Designer'},
        {img:'/assets/img/team/13.jpg', name:'Mohit', content:'Social Media Manager'},
        
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