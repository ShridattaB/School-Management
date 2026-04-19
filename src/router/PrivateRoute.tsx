import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import type { Role } from '../types/user';
import { ROUTES } from './routes';

type PrivateRouteProps = {
  allowedRoles: Role[];
};

function PrivateRoute({ allowedRoles }: PrivateRouteProps) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to={ROUTES.UNAUTHORIZED} replace />;
  }

  return <Outlet />;
}

export default PrivateRoute;
