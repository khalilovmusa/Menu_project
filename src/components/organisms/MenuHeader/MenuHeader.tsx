import type { FC } from 'react'

import styles from './MenuHeader.module.css'

interface MenuHeaderProps {
   CompanyLogo: string
   SecondLogo: string
}

const MenuHeader: FC<MenuHeaderProps> = ({ CompanyLogo, SecondLogo }) => {
   return (
      <div className={styles.menu_header}>
         <div className={styles.company_container}>
            <div>
               <img className={styles.company_logo} src={CompanyLogo} />
            </div>
            <div>
               <p className={styles.company_name}>JustDevHints!!!</p>
               <p className={styles.company_motto}>front-end developer</p>
            </div>
         </div>
         <div>
            <img className={styles.company_second_logo} src={SecondLogo} />
         </div>
      </div>
   )
}

export default MenuHeader
