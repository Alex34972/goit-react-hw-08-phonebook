import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './Navigation.module.css';
import * as selectors from '../../redux/selectors';
const Navigation = () => {
  const isAuthenticated = useSelector(selectors.isAuthenticated);
  return (
    <nav className={s.mainNav}>
      <NavLink to="/" exact className={s.link} activeClassName="activeLink">
        Main
      </NavLink>
      {isAuthenticated && (
        <NavLink to="/contacts" className={s.link} activeClassName="activeLink">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
export default Navigation;
