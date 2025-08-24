import { createSlice } from '@reduxjs/toolkit'

const defaultItems = [
   {
      id: '311',
      name: 'Espresso',
      price: 2.5,
      image: 'https://avatars.mds.yandex.net/i?id=b31c7ca2716b9a43685405b93363af88399ab250-5897285-images-thumbs&n=13',
      quantity: 4,
   },
   {
      id: '312',
      name: 'Latte',
      price: 3.5,
      image: 'https://avatars.mds.yandex.net/i?id=96f412f251ef5a31845df616dcbbd235623d68fa-10414202-images-thumbs&n=13',
      quantity: 1,
   },
]

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
   items: [...defaultItems], //?=> This will be an array of meals added to the cart
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
   },
})

export const { addItem } = counterSlice.actions
export default counterSlice.reducer
