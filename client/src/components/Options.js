import "../styles/options.css";
import { useContext } from "react";
import socials from "../pictures/socials/images2";
import { HeaderContext } from "../global/HeaderContext";
import { HamburgerContext } from "../global/HamburgerContext";

function Options() {
  const { currentComponent, setCurrentComponent } = useContext(HeaderContext);
  const { active, setActive } = useContext(HamburgerContext);

  const socialMediaLinks = [
    "https://www.facebook.com/softhouseconsulting",
    "",
    "https://www.instagram.com/softhouseconsulting/",
    "",
    "",
  ];

  const closeMenu = (value) => {
    setCurrentComponent(value);
    setActive(!active);
  };

  return (
    <div className="options-container">
      <ul>
        <li>
          <p data-testid="profile-option" onClick={() => closeMenu("profile")}>Profile</p>
        </li>
        <li>
          <p onClick={() => closeMenu("settings")}>Settings</p>
        </li>
        <li>
          <p onClick={() => closeMenu("highscore")}>HighScore</p>
        </li>
        <li>
          <p onClick={() => closeMenu("rules")}>Rules</p>
        </li>
        {/* <li>
          <p onClick={() => closeMenu("logout")}>Logout</p>
        </li> */}
      </ul>

      <div className="social-media-icons">
        {socials.map((img, index) => {
          return (
            <a href={socialMediaLinks[index]}>
              <img src={img} alt="Social media"/>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Options;
