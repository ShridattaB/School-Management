import { createContext } from 'react'
import type { User } from '../types/user'

export type AuthContextValue = {
  user: User | null
  setUser: (user: User | null) => void
  getUser: () => User | null
}

export const AuthContext = createContext<AuthContextValue | null>(null)