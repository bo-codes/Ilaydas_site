import { NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <div id="header">
      <NavLink to="/">
        <div id="header-img"></div>
      </NavLink>
      <div id="header-name">Ilayda Magrann</div>
      <div id="header-titles">Actor . Producer . Writer</div>
      <a
        id="header-contact"
        href="https://mail.google.com/mail/?view=cm&fs=1&to=hi@almiraakin.com&csu=Work+Inquiry"
        target="_blank"
        rel="noreferrer"
      >
        hi@almiraakin.com
      </a>
    </div>
  );
}

export default Header;
