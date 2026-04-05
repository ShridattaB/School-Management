import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

function Dashboard() {
  const auth = useContext(AuthContext)

  const handleLogin = () => {
    auth?.setUser({
      id: '1',
      role:'student',
      name: 'Shridatt',
      email: 'test@gmail.com',
      createdAt: new Date().toISOString(),
    })
  }

  const handleLogout = () => {
    auth?.setUser(null)
  }

  return (
    <>
      <h2>Dashboard</h2>

      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>

      <p>User: {auth?.user?.name || 'No user'}</p>
    </>
  )
}

export default Dashboard