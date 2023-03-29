import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Books' },
  { path: 'Categories', text: 'Categories' },
];

const Navbar = () => (
  <nav className="navbar">
    <h1 className="navTitle">Book Store CMS</h1>
    <ul className="navUl">
      {links.map((link) => (
        <li key={link.text}>
          <NavLink to={link.path}>{link.text}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
export default Navbar;
