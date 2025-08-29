import { createContext } from 'react'
import { useContext } from 'react'

import type { User } from './AuthProvider'

interface AuthContextType {
   user: User
   login: (email: string) => void
   logout: () => void
}

export const AuthContext = createContext<AuthContextType>({
   user: null,
   login: () => {},
   logout: () => {},
})

export const useAuth = (): AuthContextType => {
   const context = useContext(AuthContext)
   if (!context) throw new Error('useAuth be used within AuthProvider')
   return context
}
