import { type FC } from 'react'
import { useNavigate } from 'react-router'

import Loading from '@components/molecules/Loading/Loading'

import styles from './MobileApp.module.css'

const MobileApp: FC = () => {
   const navigate = useNavigate()
   return (
      <div className={styles.mobile_app_wrapper}>
         <Loading text={'This page is still cooking...'} />
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
