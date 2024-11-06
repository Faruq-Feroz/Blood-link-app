import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGooglePlay } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <section className="footer-social">
        <span>Get connected with us on social networks:</span>
        <div className="social-links">
          <a href="#!" className="social-icon"><FaFacebookF /></a>
          <a href="#!" className="social-icon"><FaTwitter /></a>
          <a href="#!" className="social-icon"><FaGoogle /></a>
          <a href="#!" className="social-icon"><FaInstagram /></a>
          <a href="#!" className="social-icon"><FaLinkedin /></a>
        </div>
      </section>

      <section className="footer-app-download">
        <p>Download our app for easy access to urgent blood requests and donations:</p>
        <a href="https://play.google.com/store/apps" className="google-play-link">
          <FaGooglePlay size={40} />
          <span>Get it on Google Play</span>
        </a>
      </section>

      <section className="footer-donation">
        <p>Your contribution matters! Help save lives by donating blood:</p>
        <button className="donate-button">Donate Now</button>
      </section>
      
      <div className="footer-copyright">
        © {new Date().getFullYear()} Blood Link. All rights reserved. Developed by Hassan.
      </div>
    </footer>
  );
};

export default Footer;
