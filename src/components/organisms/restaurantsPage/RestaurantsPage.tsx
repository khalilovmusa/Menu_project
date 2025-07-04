import { type FC } from 'react'

import BestRestaurants from '../BestRestaurants/BestRestaurants'
import FamilyRestaurant from '../FamilyRestaurants/FamilyRestaruants'

import styles from './RestaurantsPage.module.css'

const RestaurantsPage: FC = () => {
   return (
      <div>
         <h1 className={styles.restaurants_header}>Restaurant list</h1>
         <BestRestaurants />
         <FamilyRestaurant />
      </div>
   )
}

export default RestaurantsPage
