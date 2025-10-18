import { LOGO_URL } from "../utils/constants";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="logo">
        <img src={LOGO_URL} height={60} />
      </div>

      <div className="footer-items">
        <h3>Privacy Policy</h3>
        <h3>Carrers</h3>
        <h3>Zomato</h3>
        <h3>District</h3>
        <h3>Blinkit</h3>
      </div>
    </div>
  );
};

export default Footer;
