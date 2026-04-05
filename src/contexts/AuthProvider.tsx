import { useState } from 'react'
import type { User } from '../types/user'
import { AuthContext } from './AuthContext'

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // ✅ Rehydrate from localStorage on first load
  const [user, setUserState] = useState<User | null>(() => {
    const stored = localStorage.getItem('user')
    return stored ? JSON.parse(stored) : null
  })

  // ✅ setUser handles both login + logout
  const setUser = (user: User | null) => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user)) // login
    } else {
      localStorage.removeItem('user') // logout
    }
    setUserState(user)
  }

  const getUser = () => user

  return (
    <AuthContext.Provider value={{ user, setUser, getUser }}>
      {children}
    </AuthContext.Provider>
  )
}