import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <a className="navbar-logo" href="/">DesCode</a>
      <ul className="navbar-links">
        <li><a href="/SearchPage.jsx">Search</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a className="signup-btn" href="#">Sign Up</a></li>
      </ul>
    </nav>
  );
}