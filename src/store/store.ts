import { configureStore } from '@reduxjs/toolkit'

import restaurantReducer from '@store/slices/restaurantsSlice'
import { mealsCategoryAPI } from '@services/mealsCategoryAPI'

import cartReducer from './slices/orderSlice'

export const store = configureStore({
   reducer: {
      restaurants: restaurantReducer,
      [mealsCategoryAPI.reducerPath]: mealsCategoryAPI.reducer,
      cart: cartReducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(mealsCategoryAPI.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
