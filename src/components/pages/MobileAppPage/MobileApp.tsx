import { type FC } from 'react'
import { useNavigate } from 'react-router'

import styles from './MobileApp.module.css'

const MobileApp: FC = () => {
   const navigate = useNavigate()
   return (
      <div>
         <h1>This page is in development process</h1>
         <button
            className={styles.mobile_return_btn}
            onClick={() => navigate('/')}
         >
            Return back
         </button>
      </div>
   )
}

export default MobileApp
