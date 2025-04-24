import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const ClientFeedback = () => {
  const feedbacks = [
    {
      name: "Anamika Anand",
      title: "Paidavaar (CEO & Founder)",
      review:
        "Corcus completely reimagined our brand with a fresh and strong identity that truly connects with our audience. The creative touch they brought, especially with the 'Gayani Thai' character, helped us build a deeper bond with the farming community. The results speak for themselves - we've seen a huge boost in engagement, reach.",
    },
    {
      name: "Nand Kumar Patil",
      title: "Fresh O Need (CEO)",
      review:
        "Corcus took our digital presence to new heights with their seamless marketing strategies. They optimized our website, created amazing content, and ran ads that really resonated with our audience. Sales and engagement skyrocketed, and thanks to their expertise, we've been able to expand globally.",
    },
    {
      name: "Abinash",
      title: "Fresh Super Mall",
      review:
        "Working with Corcus was a game changer for our franchise lead generation. Their targeted ads, SEO, and automation strategies took things to the next level. We saw a 300% increase in leads, and our brand visibility grew massively. Their creative content and smart approach really made a difference. Couldn't recommend them more!",
    },
    {
      name: "Ankit Kumar",
      title: "Cosmosentials",
      review:
        "Working with Corcus Studio LLP has been a game-changer for Cosmosentials. They built our Shopify website and consistently deliver 5–7 ROAS every month. Their team is proactive, creative, and result-oriented. We’ve seen significant growth in our online sales thanks to their smart digital marketing strategies.",
    },
    {
      name: "Ashish",
      title: " Marshal Technologyl",
      review:
        "Corcus Studio LLP delivered exactly what we needed—an effective website, high-converting landing page, and targeted ad management. Their work has helped us generate quality leads specifically for our Salesforce courses. Their expertise and attention to detail have truly boosted our business.",
    },
    {
      name: " Dr. Punkesh",
      title: "Advance Skin Hair and Laser Clinic",
      review:
        "Corcus Studio LLP has done an excellent job with our social media management, content creation, and lead generation. Their creative approach and consistent efforts have significantly increased our online visibility and brought in quality leads. We’re extremely happy with the results and their professional service.",
    },
    {
      name: " — Mantu Mayank",
      title: "Haridwar Farms",
      review:
        "Corcus Studio LLP has been a valuable partner for Haridwar Farms. Their content creation and strategic marketing efforts have greatly boosted the sales of our organic fertilizers. Their team understands our vision and delivers results with creativity and consistency. Highly recommended!"
,
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
            box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
                      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
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
            line-height: 1.4;
            flex-grow: 1;
          }
          .testimonial-card {
            background-color: white;
            transition: transform 0.3s ease, box-shadow 0.3s ease,
              background-color 0.3s ease, color 0.3s ease;
            aspect-ratio: 1/1.2;
            display: flex;
            flex-direction: column;
            width: 100%;
            box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
              rgba(17, 17, 26, 0.05) 0px 8px 32px;
            padding: 1.5rem;
          }
          .card-body {
            padding: 1rem;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .card-title {
            font-size: 1rem;
            margin-bottom: 0.5rem;
            color: black;
          }
          .card-subtitle {
            font-size: 0.8rem;
            margin-bottom: 1rem;
            color: #666;
          }
          .card-text {
            font-size: 0.6rem;
            line-height: 1.4;
            flex-grow: 1;
            color: black;
          }
          .testimonial-card:hover .card-title,
          .testimonial-card:hover .card-text {
            color: white;
          }
          .card-text {
            font-size: 0.8rem;
            line-height: 1.8;
            flex-grow: 1;
            margin-top: 1rem;
          }
          padding: 1.5rem;
          }
          @media (max-width: 768px) {
            .card-text {
              font-size: 0.85rem;
              line-height: 1.7;
            }
            .card-title {
              font-size: 1.2rem;
            }
            .card-subtitle {
              font-size: 0.9rem;
            }
            .testimonial-card {
              padding: 1.5rem;
              aspect-ratio: 1/1.4;
            }
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

          .bg-white {
            background-color: white !important;
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
          spaceBetween={30}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 25 },
            1024: { slidesPerView: 3, spaceBetween: 25 },
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
