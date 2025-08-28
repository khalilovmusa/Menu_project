import * as React from 'react'
import { useSelector } from 'react-redux'

import type { RootState } from '@store/store'
import CartItems from '@components/organisms/CartItems/CartItems'

import MenuHeader from '../MenuHeader/MenuHeader'
import OrderStats from '../OrderStats/OrderStats'

import styles from './MenuCart.module.css'

const MenuCart = (): React.JSX.Element => {
   const totalQuantity = useSelector(
      (state: RootState) => state.cart.totalQuantity,
   )
   const totalPrice = useSelector((state: RootState) => state.cart.totalPrice)
   return (
      <div className={styles.main}>
         <MenuHeader
            headerText={`Cart (${totalQuantity})`}
            totalPrice={totalPrice}
         />
         <CartItems />
         <OrderStats totalPrice={totalPrice} totalQuantity={totalQuantity} />
      </div>
   )
}

export default MenuCart
