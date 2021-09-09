import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import s from './AuthNav.module.css';
function AuthNav() {
  return (
    <div className="authNav">
      <NavLink to="/register" className={s.linkAuth}>
        <Button size="sm">Register</Button>
      </NavLink>
      <NavLink to="/login" className={s.linkAuth}>
        <Button size="sm"> Login</Button>
      </NavLink>
    </div>
  );
}
export default AuthNav;
