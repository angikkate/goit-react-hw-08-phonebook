import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

import { toast } from 'react-toastify';

export default function PublicRoute({
  component: Component,
  redirectTo = '/',
  restricted = false,
}) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted && toast.success('Welcome!');

  return shouldRedirect ? <Navigate to={redirectTo} replace /> : Component;
}
