import { createSlice } from '@reduxjs/toolkit'

interface CartItem {
   id: string
   name: string
   price: number
   image: string
   quantity: number
}

interface CartState {
   items: CartItem[]
   totalPrice: number
   totalQuantity: number
}

const initialState: CartState = {
   items: [], //?=> This will be an array of meals added to the cart
   totalPrice: 0,
   totalQuantity: 0,
}

export const counterSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addItem: (state, action) => {
         const newItem = action.payload
         const existingItem = state.items.find((item) => item.id === newItem.id)

         if (existingItem) {
            existingItem.quantity += 1
         } else {
            state.items.push({ ...newItem, quantity: 1 })
         }
         state.totalPrice += newItem.price
         state.totalQuantity += 1
      },
      removeItem: (state, action) => {
         const removingItem = action.payload
         const existingItem = state.items.find(
            (item) => item.id === removingItem.id,
         )
         if (existingItem) {
            existingItem.quantity -= 1
         }
         state.totalPrice -= removingItem.price
         state.totalQuantity -= 1
      },
   },
})

export const { addItem, removeItem } = counterSlice.actions
export default counterSlice.reducer
