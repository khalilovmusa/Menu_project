import { addItem, deleteItem, removeItem } from '@store/slices/orderSlice'
import type { AppDispatch } from '@store/store'

interface CartItemBase {
   id: string | number
   name: string
   price: number
   image: string
}

export const dispatchCartAction = (
   dispatch: AppDispatch,
   item: CartItemBase,
   type: 'add' | 'remove' | 'delete',
): void => {
   const cartItem = { ...item, quantity: 1 }

   switch (type) {
      case 'add':
         dispatch(addItem(cartItem))
         break
      case 'remove':
         dispatch(removeItem(cartItem))
         break
      case 'delete':
         dispatch(deleteItem(cartItem))
         break
      default:
         console.warn(`Unknown cart action type: ${type}`)
   }
}
