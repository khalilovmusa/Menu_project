import { configureStore } from '@reduxjs/toolkit'

import restaurantReducer from '@store/slices/restaurantsSlice'

export const store = configureStore({
   reducer: {
      restaurants: restaurantReducer,
   },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
