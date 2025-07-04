import { useEffect, useState, type FC } from 'react'
import { useNavigate } from 'react-router'

import { dummyRestaurants as FamilyRestaurants } from '@store/dummyRestaurants/dummyRestaurants'
import distance_icon from '@assets/distance_icon.svg'

import styles from './FamilyRestaurants.module.css'

const FamilyRestaurant: FC = () => {
   const navigate = useNavigate()
   const [familyRestaurantsArr, setFamilyRestaurantsArr] = useState<
      typeof FamilyRestaurants
   >([])

   useEffect(() => {
      const filteredFamilyRestaurants = FamilyRestaurants.filter(
         (restaurant) => {
            const familyTags = restaurant.tag.split(' ')
            return familyTags.some((tag) => tag.toUpperCase() === 'FAMILY')
         },
      )

      setFamilyRestaurantsArr(filteredFamilyRestaurants)
   }, [])
   console.log(familyRestaurantsArr)
   return (
      <div className={styles.fa_restaurants_wrapper}>
         <h2 className={styles.fa_restaurants_header}>👨‍👩‍👧‍👦Family Restaurants</h2>
         <ul className={styles.fa_restaurants_list}>
            {familyRestaurantsArr.map((restaurant) => (
               <li
                  className={styles.fa_restaurant_item}
                  key={restaurant.restaurantName}
                  onClick={() => navigate(`/${restaurant.restaurantName}`)}
               >
                  <img
                     alt="Family_restaurant_BannerImg"
                     className={styles.fa_restaurant_banner}
                     src={restaurant.bannerImg}
                  />
                  <div>
                     {restaurant.restaurantName}
                     <div className={styles.fa_restaurant_distance}>
                        <img alt="distance_icn" src={distance_icon} />
                        {restaurant.distance + ' km away'}
                     </div>
                  </div>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default FamilyRestaurant
