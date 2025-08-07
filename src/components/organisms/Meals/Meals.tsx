import * as React from 'react'
// import { useParams } from 'react-router'

import { useGetMealsByCategoryQuery } from '@services/mealsCategoryAPI'

import type { Meal } from '../../../services/mealsCategoryAPI'

import styles from './Meals.module.css'

interface MealProps {
   categoryName: string
}

const Meals: React.FC<MealProps> = ({ categoryName }) => {
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
                     src={meal.strMealThumb}
                     style={{ width: '100px', borderRadius: '10px' }}
                  />
                  <p>{meal.strArea}</p>
                  <h3>{meal.strMeal}</h3>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default Meals
