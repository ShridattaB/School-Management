import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import PrivateRoute from './PrivateRoute'

// ✅ Lazy imports
const Login = lazy(() => import('../pages/Login'))
const Unauthorized = lazy(() => import('../pages/Unauthorized'))
const AdminDashboard = lazy(() => import('../pages/AdminDashboard'))
const TeacherDashboard = lazy(() => import('../pages/TeacherDashboard'))
const StudentDashboard = lazy(() => import('../pages/StudentDashboard'))
const ParentDashboard = lazy(() => import('../pages/ParentDashboard'))

function AppRouter() {
  return (
    // ✅ Suspense wrapper
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Admin */}
        <Route element={<PrivateRoute allowedRoles={['admin']} />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>

        {/* Teacher */}
        <Route element={<PrivateRoute allowedRoles={['teacher']} />}>
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        </Route>

        {/* Student */}
        <Route element={<PrivateRoute allowedRoles={['student']} />}>
          <Route path="/student/dashboard" element={<StudentDashboard />} />
        </Route>

        {/* Parent */}
        <Route element={<PrivateRoute allowedRoles={['parent']} />}>
          <Route path="/parent/dashboard" element={<ParentDashboard />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRouter