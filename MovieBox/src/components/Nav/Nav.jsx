import logo from "../../assets/icons/Logo.svg";
import { useNavigate } from "react-router-dom";

import hamburgerIcon from "../../assets/icons/Menu-alt4.svg";
import Search from "../Searchbar/search";
import "./Nav.css";

const Nav = () => {
  const navigate = useNavigate();
  const handleSignInClick = () => {
    navigate("/dashboard");
  };

  return (
    <header className="header-wrapper">
      <nav className="flex nav-wrapper">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="seach-bar">
          <Search />
        </div>

        <div className="flex menu">
          <div className="sign-in">
            <button onClick={handleSignInClick}>Sign in</button>
          </div>

          <div className="hamburger-menu">
            <img src={hamburgerIcon} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
