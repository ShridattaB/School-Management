import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import type { Role } from '../types/user'

type Props = {
  allowedRoles: Role[]
}

function PrivateRoute({ allowedRoles }: Props) {
  const { user } = useAuth()

  // ❌ Not logged in → go to login
  if (!user) {
    return <Navigate to="/login" replace />
  }

  // ❌ Logged in but wrong role → unauthorized
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />
  }

  // ✅ Allowed → render child routes
  return <Outlet />
}

export default PrivateRoute