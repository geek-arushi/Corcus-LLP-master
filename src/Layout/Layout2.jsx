import { Outlet } from "react-router-dom";
import Header2 from "../Components/Header/Header2";
import Footer2 from "../Components/Footer/Footer2";
import WhatsAppButton from "../Components/WhatsAppButton";
import CustomCursor from "../Components/CustomCursor";
const Layout2 = () => {
  return (
    <div className="main-page-area2">
      <Header2></Header2>
      <Outlet></Outlet>
      <Footer2></Footer2>
      <WhatsAppButton></WhatsAppButton>
      <CustomCursor></CustomCursor>
    </div>
  );
};

export default Layout2;
