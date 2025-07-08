import type { FC } from 'react'

import styles from './MenuHeader.module.css'

interface MenuHeaderProps {
   restaurant: string | 'restaurant-name'
   companyLogo: string
   secondLogo: string
}

const MenuHeader: FC<MenuHeaderProps> = ({
   restaurant,
   companyLogo,
   secondLogo,
}) => {
   console.log(restaurant?.split(' '))
   return (
      <div className={styles.menu_header}>
         <div className={styles.company_container}>
            <div>
               <img className={styles.company_logo} src={companyLogo} />
            </div>
            <div className={styles.company_name_wrapper}>
               <p className={styles.company_name}>
                  {restaurant?.split(' ').length > 2
                     ? restaurant?.split(' ')[0] +
                       ' ' +
                       restaurant?.split(' ')[1]
                     : restaurant}
               </p>
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
