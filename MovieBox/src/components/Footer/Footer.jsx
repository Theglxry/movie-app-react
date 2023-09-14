import "./Footer.css";
import fbIcon from "../../assets/icons/fb.svg";
import igIcon from "../../assets/icons/ig.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import ytIcon from "../../assets/icons/youtube.svg";










function Footer() {
  return (
    <footer className="footer-container">
      <div className="f-w">
        {/* socials */}
        <div className="flex socials">
          <img src={fbIcon} alt="facebook icon" />
          <img src={igIcon} alt="instagram icon" />
          <img src={twitterIcon} alt="twitter icon"/>
          <img src={ytIcon} alt="youtube icon"/>
        </div>



        {/*links*/}
        <div className="flex links">
          <p> Conditions of Use </p>
          <p>Privacy & Policy</p>
          <p>Press Room</p>

        </div>

        {/* programmer deets */}
        <div className="deets">
        © 2021 MovieBox by <a>Theglxry   </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
