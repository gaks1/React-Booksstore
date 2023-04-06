import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Books' },
  { path: 'Categories', text: 'Categories' },
];

const Navbar = () => (
  <nav className="navbar">
    <div className="navHeader">
      <h1 className="navTitle">Book Store CMS</h1>
      <ul className="navUl">
        {links.map((link) => (
          <li key={link.text}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </div>
    <div className="Oval">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="user"
        className="svg-inline--fa fa-user "
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        style={{ color: 'rgb(2, 144, 255)' }}
      >
        <path
          fill="currentColor"
          d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
        />
      </svg>
    </div>
  </nav>
);
export default Navbar;
