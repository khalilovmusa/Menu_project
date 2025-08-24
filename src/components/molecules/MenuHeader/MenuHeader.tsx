import { useNavigate } from 'react-router'
import { useLocation } from 'react-router'
import * as React from 'react'

import arrow_left from '@assets/arrow-left.svg'
import basket_fill from '@assets/basket-fill.svg'
import basket_fill_white from '@assets/basket-fill-white.svg'

import styles from './MenuHeader.module.css'

interface MenuHeaderProps {
   headerText: string
   totalPrice?: number
}

const MenuHeader = ({
   headerText,
   totalPrice,
}: MenuHeaderProps): React.JSX.Element => {
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
            className={
               totalPrice > 0 ? styles.menu_cart_active : styles.menu_cart
            }
            disabled={location.pathname === '/cart'}
            onClick={() => navigate('/cart')}
         >
            {totalPrice > 0 ? (
               <p className={styles.total_price}>${totalPrice}</p>
            ) : null}
            <img
               className={styles.menu_cart_img}
               src={totalPrice ? basket_fill_white : basket_fill}
            />
         </button>
      </header>
   )
}

export default MenuHeader
