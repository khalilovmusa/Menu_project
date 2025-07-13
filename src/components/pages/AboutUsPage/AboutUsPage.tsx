import { type FC } from 'react'
import { useNavigate } from 'react-router'

import styles from './AboutUsPage.module.css'

const AboutUs: FC = () => {
   const navigate = useNavigate()
   return (
      <div>
         <h1>This page is in development process</h1>
         <button
            className={styles.about_us_return_btn}
            onClick={() => navigate('/')}
         >
            Return back
         </button>
      </div>
   )
}

export default AboutUs
