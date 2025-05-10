import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const MentorTeamStroke4rem = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Inter&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    document.body.style.fontFamily = "'Inter', sans-serif";
    return () => {
      document.body.style.fontFamily = "";
    };
  }, []);

  const profiles = [
    {
      name: "Ayush Anand",
      title: "Wordpress,Shopify,Liquid Coading,Canva",
      description:
        "5+ years of experience in digital marketing. Strong organizational and communication skills",
      imgSrc:
        "assets/img/team/01.jpg",
      linkedin: "https://www.linkedin.com/in/ayush-anand-81119368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      alt: "Ayshi",
    },
    {
      name: "Tanisha",
      title: "AI,SEO,Blog",
      description:
        "3+ years of experience in project management and team leadership. Strong organizational and communication skills",
      imgSrc:
        "assets/img/team/04.jpg",
      linkedin: "https://www.linkedin.com/in/tanishasingh2018?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      alt: "Headshot of Jane Doe with yellow abstract shape behind",
    },
    {
      name: "Abhishek Raj",
      title: "Software Developer",
      description:
        "4+ Years of Full-Stack Development and DevOps Experience.Skilled in building and scaling web and mobile apps using React.js, Flutter, and DevOps. Proficient in front-end and back-end architecture, API integration, cloud deployment, and CI/CD pipelines.",
      imgSrc:
        "assets/img/team/06.jpg",
      linkedin: "https://www.linkedin.com/in/abhishek-raj-490606177?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      alt: "Headshot of Michael Brown with yellow abstract shape behind",
    },
    {
      name: "Arushi Singh",
      title: "Software Developer",
      description:
        "4+ Years of Full-Stack Development Experience.Skilled in building and scaling web and mobile apps using React.js and WordPress. Proficient in front-end and back-end architecture, API integration, cloud deployment, and CI/CD pipelines.",
      imgSrc:
        "assets/img/team/07.jpg",
      linkedin: "https://www.linkedin.com/in/arushi-singh-805a59264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      alt: "Headshot of Michael Brown with yellow abstract shape behind",
    },
    
    {
      name: "Animesh Anand",
      title: "Animation and Motion Graphics Artist",
      description:
        " 7+ Year of Experience in creating captivating animations, illustrations, and video edits for digital content. Experienced in bringing concepts to life with creative storytelling, motion design, and visual effects.",
      imgSrc:
        "assets/img/team/03.jpg",
      linkedin: "https://www.linkedin.com/company/corcus-studio-llp/",
      alt: "Headshot of Michael Brown with yellow abstract shape behind",
    },
  ];

  const styles = `
    .mentor-label {
      font-weight: 900;
      font-size: 4rem; /* Updated size */
      border-radius: 0.375rem;
      display: inline-block;
      user-select: none;
      color: transparent;
      -webkit-text-stroke: 2px #000;
    }
    .card-custom {
      border: 1px solid black;
      border-radius: 1.5rem;
      box-shadow: 6px 6px 0 0 black;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    .profile-img {
      width: 72px;
      height: 72px;
      object-fit: cover;
      clip-path: polygon(
        50% 0%,
        85% 15%,
        100% 50%,
        85% 85%,
        50% 100%,
        15% 85%,
        0% 50%,
        15% 15%
      );

    }
    .profile-wrapper {
      position: relative;
      width: 72px;
      height: 72px;
      margin-right: 1rem;
    }
    .profile-wrapper::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 72px;
      height: 72px;
      background-color: #f5b800;
      clip-path: polygon(
        50% 0%,
        85% 15%,
        100% 50%,
        85% 85%,
        50% 100%,
        15% 85%,
        0% 50%,
        15% 15%
      );
      filter: drop-shadow(3px 3px 0 rgba(0, 0, 0, 1));
      z-index: 0;
    }
    .linkedin-circle {
      background-color: black;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .linkedin-icon {
      color: #a6d32d;
      font-size: 0.75rem;
    }
    .card-title {
      font-weight: 600;
      font-size: 0.875rem;
      margin-bottom: 0;
    }
    .card-subtitle {
      font-size: 0.75rem;
      margin-bottom: 1rem;
    }
    .card-text {
      font-size: 0.75rem;
      line-height: 1.3;
    }
    @media (max-width: 576px) {
      body {
        padding: 1rem 1rem;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="container py-4">
        <div className="d-flex flex-column flex-sm-row align-items-center gap-3 mb-5">
          <span className="mentor-label">Mentors</span>
          <p className="mb-0" style={{ maxWidth: "36rem", fontSize: "0.875rem" }}>
      
          </p>
        </div>
        <div className="row g-4">
          {profiles.map((profile, idx) => (
            <div key={idx} className="col-12 col-sm-4 d-flex">
              <div className="card-custom">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div className="profile-wrapper">
                    <img
                      src={profile.imgSrc}
                      alt={profile.alt}
                      className="profile-img"
                    />
                  </div>
                  <a
                    href={profile.linkedin}
                    aria-label={`LinkedIn profile link for ${profile.name}`}
                    className="linkedin-circle"
                  >
                    <i className="fab fa-linkedin-in linkedin-icon"></i>
                  </a>
                </div>
                <div className="mb-3">
                  <p className="card-title">{profile.name}</p>
                  <p className="card-subtitle">{profile.title}</p>
                </div>
                <hr />
                <p className="card-text">{profile.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MentorTeamStroke4rem;
