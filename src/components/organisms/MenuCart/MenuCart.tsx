import type { FC } from 'react'

import Btn from '@components/atoms/general/Btn'

import styles from './MenuCart.module.css'

interface MenuCartProps {
   HeaderText: string
   SubHeaderText: string
   CartIcon: string
   BtnIcon: string
}

const MenuCart: FC<MenuCartProps> = ({
   HeaderText,
   SubHeaderText,
   CartIcon,
   BtnIcon,
}) => {
   return (
      <div className={styles.menu_cart_wrapper}>
         <div>
            <p className={styles.menu_text}>{HeaderText}</p>
            <p className={styles.menu_description}>{SubHeaderText}</p>
         </div>
         <div className={styles.menu_cart_icon_wrapper}>
            <img className={styles.menu_cart_icon} src={CartIcon} />
         </div>
         <Btn
            className={styles.menu_cart_btn}
            onClick={() => console.log('Hello')}
         >
            <img src={BtnIcon} />
         </Btn>
      </div>
   )
}

export default MenuCart
