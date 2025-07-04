import { useEffect, useState, type FC } from 'react'
import { useNavigate } from 'react-router'

import { dummyRestaurants as Restaurants } from '@store/dummyRestaurants/dummyRestaurants'
import distance_icon from '@assets/distance_icon.svg'

import styles from './BestRestaurants.module.css'

const BestRestaurants: FC = () => {
   const [bestRestaurantsArr, setBestRestaurantsArr] = useState<
      typeof Restaurants
   >([])
   const navigate = useNavigate()

   useEffect(() => {
      const filteredRestaurants = Restaurants.filter((restaurant) => {
         const tags = restaurant.tag.split(' ')
         return tags.some(
            (restaurantTag) => restaurantTag.toUpperCase() === 'BEST',
         )
      })

      setBestRestaurantsArr(filteredRestaurants)
   }, [])

   return (
      <div className={styles.best_restaurants_wrapper}>
         <h2 className={styles.best_restaurants_header}>💫Best Restaurants</h2>
         <ul className={styles.best_restaurants_list}>
            {bestRestaurantsArr.map((restaurant) => (
               <li
                  className={styles.best_restaurant_item}
                  key={restaurant.restaurantName}
                  onClick={() => navigate(`/${restaurant.restaurantName}`)}
               >
                  <img
                     alt="restaurant_img"
                     className={styles.best_restaurant_bannerImg}
                     src={restaurant.bannerImg}
                  />
                  <div>
                     {restaurant.restaurantName}
                     <div className={styles.best_restaurant_distance}>
                        <img
                           alt="distance_icon"
                           className={styles.distance_icon}
                           src={distance_icon}
                        />
                        {restaurant.distance + ' km away'}
                     </div>
                  </div>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default BestRestaurants
