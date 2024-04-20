import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/selectors';

export const PrivateRoute = ({ children, redirectTo = '/signin' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? children : <Navigate to={redirectTo} replace />;
};
