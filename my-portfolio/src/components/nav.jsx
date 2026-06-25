import { NavLink } from "react-router-dom";
import "../styles/navbar.css";


function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-content">
        <div className="logo">My Portfolio</div>

        <ul className="nav-links">
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              about
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar