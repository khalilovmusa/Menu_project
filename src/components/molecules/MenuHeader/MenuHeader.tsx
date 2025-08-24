import { useNavigate } from 'react-router'
import { useLocation } from 'react-router'
import * as React from 'react'

import arrow_left from '@assets/arrow-left.svg'
import basket_fill from '@assets/basket-fill.svg'

import styles from './MenuHeader.module.css'

const MenuHeader = ({
   headerText,
}: {
   headerText: string
}): React.JSX.Element => {
   const location = useLocation()
   const navigate = useNavigate()
   return (
      <header className={styles.categories_header}>
         <button
            className={styles.return_back_btn}
            onClick={() => navigate(-1)}
         >
            <img className={styles.return_back_img} src={arrow_left} />
         </button>
         <p className={styles.menu_header}>{headerText}</p>
         <button
            className={styles.menu_cart}
            disabled={location.pathname === '/cart'}
            onClick={() => navigate('/cart')}
         >
            <img className={styles.menu_cart_img} src={basket_fill} />
         </button>
      </header>
   )
}

export default MenuHeader
