import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../Pages/AboutPage";
import Layout2 from "../Layout/Layout2";
import Home3 from "../Pages/Home3";
import TeamPage from "../Pages/TeamPage";
import TeamDetailsPage from "../Pages/TeamDetailsPage";
import PricingPage from "../Pages/PricingPage";
import FaqPage from "../Pages/FaqPage";
import ContactPage from "../Pages/ContactPage";
import ServicesPage from "../Pages/ServicesPage";
import ServiceDetailsPage from "../Pages/ServiceDetailsPage";
import CaseStudyPage from "../Pages/CaseStudyPage";
import CaseStudyDetailsPage from "../Pages/CaseStudyDetailsPage";
import BlogRightSidebar from "../Pages/BlogRightSidebar";
import BlogPage from "../Pages/BlogPage";
import BlogDetailsPage from "../Pages/BlogDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout2></Layout2>,

    children: [
      {
        index: true,
        element: <Home3></Home3>,
      },
      {
        path: "/about",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "/team",
        element: <TeamPage></TeamPage>,
      },
      {
        path: "/team/team-details",
        element: <TeamDetailsPage></TeamDetailsPage>,
      },
      // {
      //   path: "/pricing",
      //   element: <PricingPage></PricingPage>,
      // },
      // {
      //   path: "/faq",
      //   element: <FaqPage></FaqPage>,
      // },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>,
      },
      {
        path: "/service",
        element: <ServicesPage></ServicesPage>,
      },
      // {
      //   path: "/service/service-details",
      //   element: <ServiceDetailsPage></ServiceDetailsPage>,
      // },
      // {
      //   path: "/project",
      //   element: <CaseStudyPage></CaseStudyPage>,
      // },
      // {
      //   path: "/project/project-details",
      //   element: <CaseStudyDetailsPage></CaseStudyDetailsPage>,
      // },
      // {
      //   path: "/blog-sidebar",
      //   element: <BlogRightSidebar></BlogRightSidebar>,
      // },
      // {
      //   path: "/blog",
      //   element: <BlogPage></BlogPage>,
      // },
      // {
      //   path: "/blog/blog-details",
      //   element: <BlogDetailsPage></BlogDetailsPage>,
      // },
    ],
  },
]);
