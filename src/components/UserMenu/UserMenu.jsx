import { useDispatch, useSelector } from 'react-redux';
import { selectName } from 'redux/auth/auth-selectors';

import { logout } from 'redux/auth/auth-operations';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const name = useSelector(selectName);
  const dispatch = useDispatch();

  return (
    <div className={css.menu}>
      <p className={css.welcome}>
        Welcome, <span className={css.name}>{name}</span>!
      </p >
      <button className={css.button} onClick={() => dispatch(logout())}>Log out</button>
    </div>
  );
};
