import { Outlet } from "react-router-dom";
import Header2 from "../Components/Header/Header2";
import Footer2 from "../Components/Footer/Footer2";
import WhatsAppButton from "../Components/WhatsAppButton";
import CustomCursor from "../Components/CustomCursor";
import ScrollToTop from "../Components/Common/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
const Layout2 = () => {
  return (
    <div className="main-page-area2">
      <ScrollToTop />
      <Header2></Header2>
      <Outlet></Outlet>
      <Footer2></Footer2>
      <WhatsAppButton></WhatsAppButton>
      <Analytics></Analytics>
      <SpeedInsights></SpeedInsights>
      <CustomCursor></CustomCursor>
    </div>
  );
};

export default Layout2;
