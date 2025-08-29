import * as React from 'react'
import { useNavigate } from 'react-router'

const NotFoundPage = (): React.JSX.Element => {
   const navigate = useNavigate()
   return (
      <div>
         Page does not found
         <button onClick={() => navigate('/')}>
            Go to the restaurants page
         </button>
      </div>
   )
}

export default NotFoundPage
