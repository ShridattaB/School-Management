import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { ROUTES } from '../router/routes';

function Dashboard() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate(ROUTES.LOGIN, { replace: true });
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <p>
        <strong>Name:</strong> {user?.name}
      </p>

      <p>
        <strong>Email:</strong> {user?.email}
      </p>

      <p>
        <strong>Role:</strong> {user?.role}
      </p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
