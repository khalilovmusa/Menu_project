import { type FC } from 'react'

import TaggedRestaurants from '../TaggedRestaurants/TaggedRestaurants'

import styles from './RestaurantsPage.module.css'

const RestaurantsPage: FC = () => {
   return (
      <div>
         <h1 className={styles.restaurants_header}>Restaurant list</h1>
         {/* <BestRestaurants />
         <FamilyRestaurant />
         <NationalRestaurants /> */}
         <TaggedRestaurants restaurantTags={['FAMILY']} />
         <TaggedRestaurants restaurantTags={['BEST']} />
         <TaggedRestaurants restaurantTags={['national']} />
      </div>
   )
}

export default RestaurantsPage
