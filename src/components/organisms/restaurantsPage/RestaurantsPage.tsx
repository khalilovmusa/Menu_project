import { type FC } from 'react'

import { dummyRestaurants } from '@store/dummyRestaurants/dummyRestaurants'

import TaggedRestaurants from '../TaggedRestaurants/TaggedRestaurants'
import RestaurantsPageNavbar from '../RestaurantsPageNavbar/RestaurantsPageNavbar'

const RestaurantsPage: FC = () => {
   return (
      <div>
         <RestaurantsPageNavbar />
         <TaggedRestaurants
            restaurantTags={['FAMILY']}
            restaurantsData={dummyRestaurants}
         />
         <TaggedRestaurants
            restaurantTags={['BEST']}
            restaurantsData={dummyRestaurants}
         />
         <TaggedRestaurants
            restaurantTags={['national']}
            restaurantsData={dummyRestaurants}
         />
         <TaggedRestaurants
            restaurantTags={['national', 'best']}
            restaurantsData={dummyRestaurants}
         />
      </div>
   )
}

export default RestaurantsPage
