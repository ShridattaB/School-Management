import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

function Dashboard() {
  const { user, setUser } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    setUser(null)
    navigate('/login', { replace: true })
  }

  return (
    <>
      <h2>Dashboard</h2>

      <p>User: {user?.name}</p>
      <p>Role: {user?.role}</p>

      <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Dashboard