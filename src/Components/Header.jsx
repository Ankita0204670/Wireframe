import { Link } from "react-router-dom";
import logo from "../assets/Logo.jpeg";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h1>Uniform Ordering System</h1>
        </div>

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;