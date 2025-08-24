import * as React from 'react'
import { useSelector } from 'react-redux'

import type { RootState } from '@store/store'

import MenuHeader from '../MenuHeader/MenuHeader'

import styles from './MenuCart.module.css'

const MenuCart = (): React.JSX.Element => {
   const cartItems = useSelector((state: RootState) => state.cart.items)
   const totalQuantity = useSelector(
      (state: RootState) => state.cart.totalQuantity,
   )
   const totalPrice = useSelector((state: RootState) => state.cart.totalPrice)
   return (
      <div className={styles.main}>
         <MenuHeader
            headerText={`Cart(${totalQuantity})`}
            totalPrice={totalPrice}
         />
         <ul className={styles.list_wrapper}>
            {cartItems.map((item) => {
               return (
                  <li className={styles.list_item} key={item.id}>
                     <img className={styles.item_thumbnail} src={item.image} />
                     <div>
                        <h1>{item.name}</h1>
                        <p>Quantity: {item.quantity}</p>
                        <p>{item.price}</p>
                     </div>
                  </li>
               )
            })}
         </ul>
      </div>
   )
}

export default MenuCart
