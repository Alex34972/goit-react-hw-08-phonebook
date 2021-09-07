import { useDispatch, useSelector } from 'react-redux';
import * as selectors from '../../redux/selectors';
import { logOut } from '../../redux/operations';
import s from './UserMenu.module.css';
function UserMenu() {
  const name = useSelector(selectors.getUserName);
  const email = useSelector(selectors.getUserEmail);

  const dispatch = useDispatch();

  return (
    <div className={s.userMenu}>
      <img alt="" width="32" className="userAvatar" />
      <span className="userName">
        Welcome, <b>{name}</b> {` [${email}]`}
      </span>
      <button
        type="button"
        onClick={() => dispatch(logOut())}
        className={s.button}
      >
        Logout
      </button>
    </div>
  );
}
export default UserMenu;
