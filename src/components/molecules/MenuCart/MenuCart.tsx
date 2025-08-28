import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import type { RootState } from '@store/store'
import trash_red from '@assets/trash_red.svg'
import plus from '@assets/plus-lg.svg'
import minus from '@assets/minus.svg'
import { dispatchCartAction } from 'utils/dispatchCartAction'

import MenuHeader from '../MenuHeader/MenuHeader'
import OrderStats from '../OrderStats/OrderStats'

import styles from './MenuCart.module.css'

const MenuCart = (): React.JSX.Element => {
   const dispatch = useDispatch()
   const cartItems = useSelector((state: RootState) => state.cart.items)
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
         <ul className={styles.list_wrapper}>
            {cartItems.map((item) => {
               return (
                  <li className={styles.list_item} key={item.id}>
                     <img
                        alt={item.name}
                        className={styles.item_thumbnail}
                        src={item.image}
                     />
                     <div className={styles.item_info_container}>
                        <div className={styles.item_name_del_container}>
                           <h2>{item.name}</h2>
                           <button
                              className={styles.trash_button}
                              onClick={() =>
                                 dispatchCartAction(dispatch, item, 'delete')
                              }
                           >
                              <img
                                 alt="delete_btn"
                                 className={styles.trash_icn_red}
                                 src={trash_red}
                              />
                           </button>
                        </div>
                        <p>$ {item.price.toFixed(2)}</p>
                        <div className={styles.quantity_container}>
                           <button
                              className={styles.quantity_buttons}
                              onClick={() =>
                                 dispatchCartAction(dispatch, item, 'remove')
                              }
                           >
                              <img alt="decrease_btn" src={minus} />
                           </button>
                           <span className={styles.quantity_wrapper}>
                              {item.quantity}
                           </span>
                           <button
                              className={styles.quantity_buttons}
                              onClick={() =>
                                 dispatchCartAction(dispatch, item, 'add')
                              }
                           >
                              <img alt="inecrease_btn" src={plus} />
                           </button>
                        </div>
                     </div>
                  </li>
               )
            })}
            <OrderStats totalPrice={totalPrice} totalQuantity={totalQuantity} />
         </ul>
      </div>
   )
}

export default MenuCart
