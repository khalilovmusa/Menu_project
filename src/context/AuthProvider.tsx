import { useState } from 'react'
import * as React from 'react'

import { mockUser1, mockUser2 } from '@store/helper/mockAuth/mockUser'

export type User = typeof mockUser1 | null
import { AuthContext } from './AuthContext'

export const AuthProvider = ({
   children,
}: {
   children: React.ReactNode
}): React.JSX.Element => {
   const [user, setUser] = useState<User>(null)

   const login = (email: string): void => {
      const foundUser = [mockUser1, mockUser2].find(
         (user) => user.email === email,
      )
      if (foundUser) setUser(foundUser)
   }

   const logout = (): void => setUser(null)

   return (
      <AuthContext.Provider value={{ user, login, logout }}>
         {children}
      </AuthContext.Provider>
   )
}
