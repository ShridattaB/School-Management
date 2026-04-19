import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import type { User } from '../types/user';
import { ROUTES } from '../router/routes';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ✅ TYPE FIX HERE
    const userData: User = {
      id: '1',
      name: 'Shridatt',
      email,
      role: 'admin', // ✅ must be one of Role
      createdAt: new Date().toISOString(),
    };

    setUser(userData);

    // ✅ redirect based on role
    switch (userData.role) {
      case 'admin':
        navigate(ROUTES.ADMIN_DASHBOARD);
        break;
      case 'teacher':
        navigate(ROUTES.TEACHER_DASHBOARD);
        break;
      case 'student':
        navigate(ROUTES.STUDENT_DASHBOARD);
        break;
      case 'parent':
        navigate(ROUTES.PARENT_DASHBOARD);
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
