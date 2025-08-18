import { useNavigate } from 'react-router'
import * as React from 'react'

import basket_fill from '@assets/basket-fill.svg'
import arrow_left from '@assets/arrow-left.svg'

import styles from './MenuHeader.module.css'

const MenuHeader = (): React.JSX.Element => {
   const navigate = useNavigate()
   return (
      <header className={styles.categories_header}>
         <button
            className={styles.return_back_btn}
            onClick={() => navigate(-1)}
         >
            <img className={styles.return_back_img} src={arrow_left} />
         </button>
         <p className={styles.menu_header}>Menu</p>
         <button className={styles.menu_cart}>
            <img className={styles.menu_cart_img} src={basket_fill} />
         </button>
      </header>
   )
}

export default MenuHeader
