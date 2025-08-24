import * as React from 'react'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'

import { unslugify } from 'utils/unslugify'
import { menuData } from '@store/helper/mainCategories.ts/menuData'
import MenuHeader from '@components/molecules/MenuHeader/MenuHeader'
import plus_icon from '@assets/plus-lg.svg'
import { addItem } from '@store/slices/orderSlice'

import styles from './CategoryMeals.module.css'

const CategoryMeals: React.FC = () => {
   const dispatch = useDispatch()
   const { categorySlug, subCategorySlug } = useParams()
   const category = menuData.find((category) => category.slug === categorySlug)
   const subCategory = categorySlug?.length
      ? category?.subcategories.find((sub) => sub.slug === subCategorySlug)
      : null
   const data = subCategory?.items
   return (
      <div className={styles.main}>
         <MenuHeader
            headerText={unslugify(
               subCategorySlug?.length ? subCategorySlug : (categorySlug ?? ''),
            )}
         />
         <ul className={styles.list_wrapper}>
            {data?.map((meal) => (
               <li className={styles.list_item} key={meal.id}>
                  <img
                     alt={meal.name}
                     className={styles.meal_thumbnail}
                     src={meal.image}
                  />
                  <h3>{meal.name}</h3>
                  <div className={styles.meal_details_wrapper}>
                     <p className={styles.meal_price}>{meal.price}$</p>
                     <button
                        className={styles.add_meal_btn}
                        onClick={() => {
                           const cartItem = {
                              id: meal.id,
                              name: meal.name,
                              price: meal.price,
                              image: meal.image,
                              quantity: 1,
                           }
                           dispatch(addItem(cartItem))
                        }}
                     >
                        <img className={styles.add_meal_icon} src={plus_icon} />
                     </button>
                  </div>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default CategoryMeals
