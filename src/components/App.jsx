import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import { selectIsFetchingCurrentUser } from 'redux/auth/auth-selectors';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Spinner from 'components/Spinner';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppBar = lazy(() => import('./AppBar'));
const Home = lazy(() => import('pages/Home'));
const PhoneBook = lazy(() => import('pages/PhoneBook'));
const LogInForm = lazy(() => import('pages/Auth/LogInForm'));
const RegisterForm = lazy(() => import('pages/Auth/RegisterForm'));
const NotExistPage = lazy(() => import('pages/NotExistPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Suspense
        fallback={
          <Spinner
            styles={{ justifyContent: 'center', marginTop: 150 }}
            width={100}
            height={100}
          />
        }
      >
        <Routes>
          <Route path="/" element={<AppBar />}>
            {!isFetchingCurrentUser && (
              <>
                <Route index element={<PublicRoute component={<Home />} />} />

                <Route
                  path="contacts"
                  element={
                    <PrivateRoute
                      component={<PhoneBook />}
                      redirectTo="/login"
                    />
                  }
                />
                <Route
                  path="register"
                  element={
                    <PublicRoute
                      component={<RegisterForm />}
                      redirectTo="/contacts"
                      restricted
                    />
                  }
                />
                <Route
                  path="login"
                  element={
                    <PublicRoute
                      component={<LogInForm />}
                      redirectTo="/contacts"
                      restricted
                    />
                  }
                />
                <Route
                  path="*"
                  element={
                    <PublicRoute>
                      <NotExistPage />
                    </PublicRoute>
                  }
                />
              </>
            )}
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
};
