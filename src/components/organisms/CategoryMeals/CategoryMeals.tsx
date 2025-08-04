import * as React from 'react'
import { useParams } from 'react-router'

import { useGetMealsByCategoryQuery } from '@services/mealsCategoryAPI'

import type { Meal } from '../../../services/mealsCategoryAPI'

const CategoryMeals = (): React.JSX.Element => {
   const params = useParams<{ categoryName?: string }>()
   const categoryName = params.categoryName ?? ''

   const { data, error, isLoading } = useGetMealsByCategoryQuery(
      categoryName ?? '',
   )
   if (isLoading) return <div>Loading Categories...</div>
   if (error) return <div>Oops, something went wrong!</div>

   return (
      <div>
         <ul style={{ padding: 0 }}>
            {data?.map((meal: Meal) => (
               <li
                  key={meal.idMeal}
                  style={{
                     listStyle: 'none',
                     textAlign: 'center',
                     marginBottom: '2rem',
                     maxWidth: '400px',
                     marginInline: 'auto',
                  }}
               >
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

export default CategoryMeals
