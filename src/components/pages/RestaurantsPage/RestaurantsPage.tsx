import { type FC } from 'react'

import { dummyRestaurants } from '@store/dummyRestaurants/dummyRestaurants'
import TaggedRestaurants from '@components/organisms/TaggedRestaurants/TaggedRestaurants'
import RestaurantsPageNavbar from '@components/organisms/RestaurantsPageNavbar/RestaurantsPageNavbar'

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
