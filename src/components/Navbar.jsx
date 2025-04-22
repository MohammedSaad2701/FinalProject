import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Vulnera</div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/scan" className={({ isActive }) => (isActive ? 'active' : '')}>
            Scan
          </NavLink>
        </li>
        <li>
          <NavLink to="/results" className={({ isActive }) => (isActive ? 'active' : '')}>
            Results
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;