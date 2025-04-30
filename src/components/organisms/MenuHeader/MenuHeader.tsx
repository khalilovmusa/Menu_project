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
            <div>
               <p className={styles.company_name}>JustDevHints!!!</p>
               <p className={styles.company_motto}>front-end developer</p>
            </div>
         </div>
         <div>
            <img className={styles.company_second_logo} src={secondLogo} />
         </div>
      </div>
   )
}

export default MenuHeader
