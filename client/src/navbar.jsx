import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">DesCode</div>
      <ul className="navbar-links">
        <li><a href="#">Search</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a className="signup-btn" href="#">Sign Up</a></li>
      </ul>
    </nav>
  );
}