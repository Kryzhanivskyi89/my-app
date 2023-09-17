import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuth } from '../redux/auth/authSelectors';

export const RestrictedRoute = ({
  redirectTo = '/',
  component: Component,
  ...routerProps
}) => {
  const { token } = useSelector(selectAuth);

  return token ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;