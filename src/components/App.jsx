import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useDispatch } from 'react-redux';
import { apiRefreshUser } from '../redux/authorization/authReducer';

import { Layout } from './index';

const WelcomePage = lazy(() => import('Pages/WelcomePage/WelcomePage'));
const Signin = lazy(() => import('Pages/SignIn/SignIn'));
const Signup = lazy(() => import('Pages/Signup/Signup'));
const Home = lazy(() => import('Pages/Home/Home'));

export const App = () => {
  const dispatch = useDispatch();
  //const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);
  return (
    <div>
      <Suspense fallback={<div>LOADING...</div>}>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <RestrictedRoute>
                  <WelcomePage />
                </RestrictedRoute>
              }
            />
            <Route
              path="signin"
              element={
                <RestrictedRoute>
                  <Signin />
                </RestrictedRoute>
              }
            />
            <Route
              path="signup"
              element={
                <RestrictedRoute>
                  <Signup />
                </RestrictedRoute>
              }
            />
            <Route
              path="home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
