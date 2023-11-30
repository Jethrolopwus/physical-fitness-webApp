import "./Navbar.css";
import {Link, NavLink} from "react-router-dom";
import Logo from "../images/logoH.jpg";
import {links} from "../Data";
import { FaBars } from "react-icons/fa";

const Navbar = () =>{
    return (
        <nav>
            <div className="container nav__container">
                <Link to="/" className="logo">
                    <img src={Logo} alt="Nav-logo" />
                </Link>
              <ul className="nav__links">
                {
                    links.map(({name, path}, index) =>{
                        return(
                            <li>
                                <NavLink to={path}>{name}</NavLink>
                            </li>
                        )
                    })
                }
              </ul>
                <button className="nav__toggle-btn">
                    <FaBars/>         
                </button>
            </div>
        </nav>
    )
}
export default Navbar;