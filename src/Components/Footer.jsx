import {Link} from "react-router-dom";
import Logo from "../images/logoH.jpg";
import { FaInstagram, FaLinkedin, FaTwitter , FaFacebookF} from "react-icons/fa";


const Footer = () => {
  return (
     <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className="logo">
                    <img  src={Logo} alt=" footer logo"/>
                </Link>
                <p>We are commited to offering our services cutting across different age and cycle</p>
                <div className="footer__socials">
                    <a href="https://linkedin.com/" target="_blank" rel="noreferrer noopener"><FaLinkedin/></a>
                    <a href="https://facebook.com/" target="_blank" rel="noreferrer noopener"><FaFacebookF/></a>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener"><FaTwitter/></a>
                    <a href="https://instagram.com/" target="_blank" rel="noreferrer noopener"><FaInstagram/></a>
                </div>
            </article>
            <article>
                <h4>permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/S">Blog</Link>
                <Link to="/S">Case Studies</Link>
                <Link to="/S">Events</Link>
                <Link to="/S">Communities</Link>
                <Link to="/S">FAQs</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to="/contact">Contact Us</Link>
                <Link to="/S">Support</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>2023 Jethsmith &copy; All Rigth Reserved</small>
        </div>
    </footer>
  )
}

export default Footer