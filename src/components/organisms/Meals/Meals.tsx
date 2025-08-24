import * as React from 'react'
import { useDispatch } from 'react-redux'

import { useGetMealsByCategoryQuery } from '@services/mealsCategoryAPI'
import { addItem } from '@store/slices/orderSlice'

import type { Meal } from '../../../services/mealsCategoryAPI'

import styles from './Meals.module.css'

interface MealProps {
   categoryName: string
}

const Meals: React.FC<MealProps> = ({ categoryName }) => {
   const dispatch = useDispatch()
   const { data, error, isLoading } = useGetMealsByCategoryQuery(
      categoryName ?? '',
   )
   if (isLoading) return <div>Loading Categories...</div>
   if (error) return <div>Oops, something went wrong!</div>
   return (
      <div className={styles.meals_wrapper}>
         <ul className={styles.meals_list}>
            {data?.map((meal: Meal) => (
               <li className={styles.meal_item} key={meal.idMeal}>
                  <img
                     alt={meal.strMeal}
                     className={styles.meal_thumbnail}
                     src={meal.strMealThumb}
                  />
                  <h4 className={styles.meal_name}>{meal.strMeal}</h4>
                  <span
                     className={styles.add_meal_icon}
                     onClick={() => {
                        const cartItem = {
                           id: meal.idMeal,
                           name: meal.strMeal,
                           price: 10,
                           quantity: 1,
                        }

                        dispatch(addItem(cartItem))
                     }}
                  >
                     .
                  </span>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default Meals
