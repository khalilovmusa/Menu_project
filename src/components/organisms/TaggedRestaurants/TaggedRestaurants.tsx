import { useEffect, useState, type FC } from 'react'
import { useNavigate } from 'react-router'

import { dummyRestaurants as TaggedRestaurantData } from '@store/dummyRestaurants/dummyRestaurants'
import distance_icon from '@assets/distance_icon.svg'

import styles from './TaggedRestaurants.module.css'

interface TaggedRestaurantProps {
   restaurantTags: string[]
}

const TaggedRestaurants: FC<TaggedRestaurantProps> = ({ restaurantTags }) => {
   let tagEmoji
   const navigate = useNavigate()
   const [taggedRestaurantDataArr, setTaggedRestaurantDataArr] = useState<
      typeof TaggedRestaurantData
   >([])

   useEffect(() => {
      const filteredTagRestaurantsData = TaggedRestaurantData.filter(
         (restaurant) => {
            const restaurantTagsArr = restaurant.tag.split(' ')
            return restaurantTagsArr.some((tag) =>
               restaurantTags.some(
                  (filterTag) => tag.toUpperCase() === filterTag.toUpperCase(),
               ),
            )
         },
      )
      setTaggedRestaurantDataArr(filteredTagRestaurantsData)
   }, [restaurantTags])

   switch (restaurantTags[0].toLowerCase()) {
      case 'family':
         tagEmoji = '👨‍👩‍👧‍👦'
         break
      case 'best':
         tagEmoji = '💫'
         break
      case 'national':
         tagEmoji = '🏞️'
         break
      default:
         tagEmoji = '#️⃣'
         break
   }
   const shownTag =
      restaurantTags.length > 1
         ? restaurantTags.sort().join('-').toLowerCase()
         : tagEmoji + ' ' + restaurantTags[0].toLowerCase()
   return (
      <div className={styles.tagged_restaurants_wrapper}>
         <h2 className={styles.tagged_restaurants_header}>{shownTag}</h2>
         <ul className={styles.tagged_restaurants_list}>
            {taggedRestaurantDataArr.map((restaurant) => (
               <li
                  className={styles.tagged_restaurant_item}
                  key={restaurant.restaurantName}
                  onClick={() => navigate(`/${restaurant.restaurantName}`)}
               >
                  <img
                     alt="Family_restaurant_BannerImg"
                     className={styles.tagged_restaurant_banner}
                     src={restaurant.bannerImg}
                  />
                  <div>
                     {restaurant.restaurantName}
                     <div className={styles.tagged_restaurant_distance}>
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
export default TaggedRestaurants
