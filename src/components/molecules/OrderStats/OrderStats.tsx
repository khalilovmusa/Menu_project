import * as React from 'react'
import { useNavigate } from 'react-router'

import styles from './OrderStats.module.css'
interface OrderStatsProps {
   totalQuantity: number
   totalPrice: number
}
const OrderStats = ({
   totalQuantity,
   totalPrice,
}: OrderStatsProps): React.JSX.Element => {
   const navigate = useNavigate()
   const orderFee = ((totalPrice * 20) / 100).toFixed(2)
   return (
      <div className={styles.order_stats_container}>
         {totalQuantity > 0 ? (
            <div>
               <div>
                  <div>
                     <span className={styles.order_price}>
                        <p>Order:</p>
                        <p>$ {totalPrice.toFixed(2)}</p>
                     </span>
                     <span className={styles.order_fee}>
                        <p>Service fee(20%):</p>
                        <p>$ {orderFee}</p>
                     </span>
                  </div>
                  <div className={styles.total_price}>
                     <p>Total:</p>
                     <p>
                        $ {(Number(totalPrice) + Number(orderFee)).toFixed(2)}
                     </p>
                  </div>
               </div>
               <button className={styles.order_btn}>Place Order</button>{' '}
            </div>
         ) : (
            <div className={styles.empty_container}>
               <p className={styles.empty_text}>
                  Your cart is empty. Add something to the cart
               </p>
               <button
                  className={styles.order_btn}
                  onClick={() => navigate('/menu')}
               >
                  Go to the menu
               </button>
            </div>
         )}
      </div>
   )
}

export default OrderStats
