import type { FC } from 'react'
import { useNavigate } from 'react-router'

import Btn from '@components/atoms/general/Btn'

import styles from './MenuCart.module.css'

interface MenuCartProps {
   headerText: string
   subHeaderText: string
   cartIcon: string
   btnIcon: string
}

const MenuCart: FC<MenuCartProps> = ({
   headerText,
   subHeaderText,
   cartIcon,
   btnIcon,
}) => {
   const navigate = useNavigate()
   return (
      <div
         className={styles.menu_cart_wrapper}
         onClick={() => navigate('/menu')}
      >
         <div>
            <p className={styles.menu_text}>{headerText}</p>
            <p className={styles.menu_description}>{subHeaderText}</p>
         </div>
         <div className={styles.menu_cart_icon_wrapper}>
            <img className={styles.menu_cart_icon} src={cartIcon} />
         </div>
         <Btn className={styles.menu_cart_btn}>
            <img src={btnIcon} />
         </Btn>
      </div>
   )
}

export default MenuCart
