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
      name: "John Smith",
      title: "CEO and Founder",
      description:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
      imgSrc:
        "https://storage.googleapis.com/a1aa/image/e74b7ff4-ff69-460f-8cc8-658663cba7e3.jpg",
      linkedin: "#",
      alt: "Headshot of John Smith with yellow abstract shape behind",
    },
    {
      name: "Jane Doe",
      title: "Director of Operations",
      description:
        "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
      imgSrc:
        "https://storage.googleapis.com/a1aa/image/1bf5636a-a8d4-49d4-f0ec-5a67e178799b.jpg",
      linkedin: "#",
      alt: "Headshot of Jane Doe with yellow abstract shape behind",
    },
    {
      name: "Michael Brown",
      title: "Senior SEO Specialist",
      description:
        "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
      imgSrc:
        "https://storage.googleapis.com/a1aa/image/a1489e73-78f9-4aef-5d8e-5f98ba59f54a.jpg",
      linkedin: "#",
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
      filter: brightness(0) saturate(100%) invert(82%) sepia(100%) saturate(749%) hue-rotate(39deg) brightness(96%) contrast(101%);
      position: relative;
      z-index: 1;
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
            Meet the skilled and experienced team behind our successful digital
            marketing strategies
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
