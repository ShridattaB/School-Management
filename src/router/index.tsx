import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import PrivateRoute from './PrivateRoute';
import { ROUTES } from './routes';

const Login = lazy(() => import('../pages/Login'));
const Unauthorized = lazy(() => import('../pages/Unauthorized'));
const AdminDashboard = lazy(() => import('../pages/AdminDashboard'));
const TeacherDashboard = lazy(() => import('../pages/TeacherDashboard'));
const StudentDashboard = lazy(() => import('../pages/StudentDashboard'));
const ParentDashboard = lazy(() => import('../pages/ParentDashboard'));

function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.UNAUTHORIZED} element={<Unauthorized />} />

        <Route element={<PrivateRoute allowedRoles={['admin']} />}>
          <Route path={ROUTES.ADMIN_DASHBOARD} element={<AdminDashboard />} />
        </Route>

        <Route element={<PrivateRoute allowedRoles={['teacher']} />}>
          <Route path={ROUTES.TEACHER_DASHBOARD} element={<TeacherDashboard />} />
        </Route>

        <Route element={<PrivateRoute allowedRoles={['student']} />}>
          <Route path={ROUTES.STUDENT_DASHBOARD} element={<StudentDashboard />} />
        </Route>

        <Route element={<PrivateRoute allowedRoles={['parent']} />}>
          <Route path={ROUTES.PARENT_DASHBOARD} element={<ParentDashboard />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
