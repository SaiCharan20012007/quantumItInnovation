import "./index.css";
import { AiOutlineMenu } from "react-icons/ai";

import "bootstrap/dist/css/bootstrap.min.css";
const Header2 = () => (
  <div className="header-2">
    <div className="nav-image">
      <img
        src="https://quantumitinnovation.com/assets/images/logo/logo.png"
        alt="logo"
        className="logo"
      />
    </div>
    <ul className="nav-items">
      <li href="#home">Home</li>
      <li href="#about">About</li>
      <li href="#project">Project</li>
      <li href="#blog">Blog</li>
      <li href="#services">Services</li>

      <li href="#contact">Contact</li>
    </ul>
    <AiOutlineMenu className="Menu" />
  </div>
);

export default Header2;
