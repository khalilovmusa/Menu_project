import type { FC } from 'react'

import styles from './MenuHeader.module.css'

interface MenuHeaderProps {
   companyLogo: string
   secondLogo: string
}

const MenuHeader: FC<MenuHeaderProps> = ({ companyLogo, secondLogo }) => {
   return (
      <div className={styles.menu_header}>
         <div className={styles.company_container}>
            <div>
               <img className={styles.company_logo} src={companyLogo} />
            </div>
            <div className={styles.company_name_wrapper}>
               <p className={styles.company_name}>JustDevHints!!</p>
               <p className={styles.company_motto}>restaurant menu</p>
            </div>
         </div>
         <div className={styles.second_logo_wrapper}>
            <img className={styles.company_second_logo} src={secondLogo} />
         </div>
      </div>
   )
}

export default MenuHeader
