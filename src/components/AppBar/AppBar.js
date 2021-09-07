import { useSelector } from 'react-redux';
import Navigation from '../navigation';
import AuthNav from '../authNav';
import UserMenu from '../userMenu';
import s from './Appbar.module.css';
import * as selectors from '../../redux/selectors';
export default function Appbar() {
  const isAuthenticated = useSelector(selectors.isAuthenticated);
  return (
    <header className={s.header}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
