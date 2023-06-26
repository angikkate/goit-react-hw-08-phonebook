import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <ul className={css.authNavList}>
      <li className={css.link}>
        <NavLink to="register">Register</NavLink>
      </li>
      <li className={css.link}>
        <NavLink to="login">Log in</NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;
