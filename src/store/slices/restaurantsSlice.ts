import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { RestaurantTypes } from 'types/dummyRestaurantsTypes'
import { dummyRestaurants } from '@store/helper/dummyRestaurants/dummyRestaurants'

interface RestaurantState {
   restaurants: RestaurantTypes[]
   selected?: RestaurantTypes
}

const initialState: RestaurantState = {
   restaurants: dummyRestaurants,
}

export const restaurantSlice = createSlice({
   name: 'restaurants',
   initialState,
   reducers: {
      selectById: (state, action: PayloadAction<number>) => {
         state.selected = state.restaurants.find(
            (rest) => rest.id === +action.payload,
         )
      },
      // clearSelected: (state) => {
      //    state.selected = undefined
      // },
      // addRestaurant: (state, action: PayloadAction<RestaurantTypes>) => {
      //    state.restaurants.push(action.payload)
      // },
   },
})

export const { selectById } = restaurantSlice.actions
export default restaurantSlice.reducer
