import { useDispatch, useSelector } from 'react-redux';
import * as selectors from '../../redux/selectors';
import { logOut } from '../../redux/operations';

import { ImEnvelop } from 'react-icons/im';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from './UserMenu.module.css';
function UserMenu() {
  const name = useSelector(selectors.getUserName);
  const email = useSelector(selectors.getUserEmail);

  const dispatch = useDispatch();

  return (
    <div className={s.userMenu}>
      <span className={s.userName}>
        Welcome, <b>{name}</b>
      </span>
      <span className={s.usermail}>
        <ImEnvelop className={s.icon} />
        {`${email}`}
      </span>

      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
  );
}
export default UserMenu;
