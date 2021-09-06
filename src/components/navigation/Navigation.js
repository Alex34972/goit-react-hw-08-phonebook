import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
const Navigation = () => {
  return (
    <nav>
      <NavLink
        exact
        to="/"
        className={s.NavLink}
        activeClassName={s.activeLink}
      >
        Home
      </NavLink>
      <NavLink
        exact
        to="/register"
        className={s.NavLink}
        activeClassName={s.activeLink}
      >
        Register
      </NavLink>
      <NavLink to="/login" className={s.NavLink} activeClassName={s.activeLink}>
        Log In
      </NavLink>
    </nav>
  );
};
export default Navigation;
