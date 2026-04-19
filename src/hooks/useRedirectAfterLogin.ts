import { useAuth } from './useAuth';

export const useRedirectAfterLogin = () => {
  const { user } = useAuth();

  const getRedirectPath = (): string => {
    if (!user) return '/login';

    switch (user.role) {
      case 'admin':
        return '/admin/dashboard';
      case 'teacher':
        return '/teacher/dashboard';
      case 'student':
        return '/student/dashboard';
      case 'parent':
        return '/parent/dashboard';
      default:
        return '/login';
    }
  };

  return getRedirectPath;
};
