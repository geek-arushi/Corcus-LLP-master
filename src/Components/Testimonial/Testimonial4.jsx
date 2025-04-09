import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

const ClientFeedback = () => {
  const feedbacks = [
    {
      name: "Anamika Anand",
      title: "Paidavaar (CEO & Founder)",
      review:
        "Corcus completely reimagined our brand with a fresh and strong identity that truly connects with our audience. The creative touch they brought, especially with the 'Gayani Thai' character, helped us build a deeper bond with the farming community. The results speak for themselves - we've seen a huge boost in engagement, reach, and trust. It's been a transformative experience!",
    },
    {
      name: "Nand Kumar Patil",
      title: "Fresh O Need (CEO)",
      review:
        "Corcus took our digital presence to new heights with their seamless marketing strategies. They optimized our website, created amazing content, and ran ads that really resonated with our audience. Sales and engagement skyrocketed, and thanks to their expertise, we've been able to expand globally. They've truly been an essential part of our journey.",
    },
    {
      name: "Abinash",
      title: "Fresh Super Mall",
      review:
        "Working with Corcus was a game changer for our franchise lead generation. Their targeted ads, SEO, and automation strategies took things to the next level. We saw a 300% increase in leads, and our brand visibility grew massively. Their creative content and smart approach really made a difference. Couldn't recommend them more!",
    },
    {
      name: "Abinash",
      title: "Fresh Super Mall",
      review:
        "Working with Corcus was a game changer for our franchise lead generation. Their targeted ads, SEO, and automation strategies took things to the next level. We saw a 300% increase in leads, and our brand visibility grew massively. Their creative content and smart approach really made a difference. Couldn't recommend them more!",
    },
    {
      name: "Abinash",
      title: "Fresh Super Mall",
      review:
        "Working with Corcus was a game changer for our franchise lead generation. Their targeted ads, SEO, and automation strategies took things to the next level. We saw a 300% increase in leads, and our brand visibility grew massively. Their creative content and smart approach really made a difference. Couldn't recommend them more!",
    },
  ];

  return (
    <div className="bg-white py-2">
      <div className="container text-left mb-5">
        <style jsx="true">{`
          .reveal-text {
            opacity: 0;
            transform: translateY(20px);
            animation: revealText 0.8s ease-out forwards;
          }

          @keyframes revealText {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .testimonial-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease,
              background-color 0.3s ease, color 0.3s ease;
            aspect-ratio: 1/1.4;
            display: flex;
            flex-direction: column;
            width: 100%;
            box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
              rgba(17, 17, 26, 0.05) 0px 8px 32px;
          }

          .card-body {
            padding: 1rem;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          .testimonial-card:hover {
            transform: translateY(-5px);
            background-color: black;
            color: white;
            box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 24px,
              rgba(0, 0, 0, 0.3) 0px 16px 56px, rgba(0, 0, 0, 0.3) 0px 24px 80px;
          }

          .testimonial-card:hover .card-subtitle {
            color: #cccccc !important;
          }

          .testimonial-card:hover .star {
            color: #ffd700;
          }

          .card-body {
            padding: 2rem;
            height: 100%;
          }

          .card-title {
            font-size: 1rem;
            margin-bottom: 0.5rem;
          }

          .card-subtitle {
            font-size: 0.7rem;
            margin-bottom: 1rem;
          }

          .card-text {
            font-size: 0.6rem;
            line-height: 1.6;
            flex-grow: 1;
          }
          .animate-up {
            opacity: 0;
            transform: translateY(20px);
            animation: slideUp 0.5s ease-out forwards;
          }

          @keyframes slideUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .star {
            animation: twinkle 1.5s infinite;
          }

          .star:nth-child(2) {
            animation-delay: 0.3s;
          }
          .star:nth-child(3) {
            animation-delay: 0.6s;
          }
          .star:nth-child(4) {
            animation-delay: 0.9s;
          }
          .star:nth-child(5) {
            animation-delay: 1.2s;
          }

          @keyframes twinkle {
            0%,
            100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
        `}</style>
        <div className="reveal-text">
          <h1
            className="display-4 font-weight-bold"
            style={{
              WebkitTextStroke: "2px black",
              color: "transparent",
              fontWeight: 900,
            }}
          >
            CLIENT 
          </h1>
          <h2
            className="display-3 font-weight-bold"
            style={{ fontWeight: 900 }}
          >
            FEEDBACK
          </h2>
        </div>
      </div>

      <div className="container">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 30 },
            768: { slidesPerView: 2, spaceBetween: 40 },
            1024: { slidesPerView: 3, spaceBetween: 60 },
            1200: { slidesPerView: 4, spaceBetween: 30 },
          }}
        >
          {feedbacks.map((feedback, index) => (
            <SwiperSlide key={index} className="h-100">
              <div className="testimonial-card card h-100 shadow-sm p-3 d-flex flex-column">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title font-weight-bold animate-up">
                      {feedback.name}
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted animate-up">
                      {feedback.title}
                    </h6>
                    <div className="star-rating text-warning mb-3">
                      {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon
                          key={i}
                          icon={faStar}
                          className="star"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="card-text mt-auto animate-up">
                    {feedback.review}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ClientFeedback;
