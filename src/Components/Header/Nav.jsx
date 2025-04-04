import DropDown from "./DropDown";
import { Link } from "react-router-dom";

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium space-y-2 sm:space-y-0">
      <li className="menu-item transition-all duration-300 hover:opacity-80">
        <Link to="/" className="block py-1 px-2">
          Home
        </Link>
      </li>
      <li className="menu-item transition-all duration-300 hover:opacity-80">
        <Link to="/about" className="block py-1 px-2">
          About Us
        </Link>
      </li>
      <li className="menu-item transition-all duration-300 hover:opacity-80">
        <Link
          to="/service"
          onClick={() => setMobileToggle(false)}
          className="block py-1 px-2"
        >
          Services
        </Link>
      </li>
      <li className="menu-item transition-all duration-300 hover:opacity-80">
        <Link
          to="/contact"
          onClick={() => setMobileToggle(false)}
          className="block py-1 px-2"
        >
          Contact US
        </Link>
      </li>
    </ul>
  );
}
