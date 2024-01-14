import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectAuth } from '../redux/auth/authSelectors';

export const PrivateRoute = ({
  redirectTo = '/auth/:id',
  component: Component,
  ...routerProps
}) => {
  const { token, isRefreshing } = useSelector(selectAuth);

  const shouldRedirect = !token && !isRefreshing && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};