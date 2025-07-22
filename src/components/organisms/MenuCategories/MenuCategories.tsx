// import { useEffect, useState, type FC } from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router'

// import styles from './MenuCategories.module.css'

// type Category = {
//    idCategory: string
//    strCategory: string
//    strCategoryThumb: string
//    strCategoryDescription: string
// }

// type CategoryApiResponse = {
//    categories: Category[]
// }

// const MenuCategories: FC = () => {
//    const [categoryData, setCategoryData] = useState<Category[] | null>(null)
//    const [isLoading, setIsLoading] = useState<boolean>(true)
//    const [error, setError] = useState<string>('')

//    const navigate = useNavigate()

//    useEffect(() => {
//       axios
//          .get<CategoryApiResponse>(
//             'https://www.themealdb.com/api/json/v1/1/categories.php',
//          )
//          .then((res) => {
//             setCategoryData(res.data.categories)
//             setIsLoading(false)
//          })
//          .catch((error) => {
//             setError(error.message || 'Something went wrong!')
//             setIsLoading(false)
//          })
//    }, [])
//    if (isLoading) return <div>Loading data...</div>
//    if (error) return <div>An error occurred: {error}</div>
//    if (!categoryData?.length) return <div>No categories found.</div>
//    return (
//       <div className={styles.category_wrapper}>
//          {categoryData?.map((category) => (
//             <div
//                className={styles.category_item}
//                key={category.idCategory}
//                onClick={() => navigate(`/categories/${category.strCategory}`)}
//             >
//                <img
//                   alt={category.strCategory}
//                   src={category.strCategoryThumb}
//                />
//                <h3>{category.strCategory}</h3>
//             </div>
//          ))}
//       </div>
//    )
// }

// export default MenuCategories

import * as React from 'react'
import { useParams } from 'react-router'

import { useGetMealsByCategoryQuery } from '@services/mealsCategoryAPI'

import type { Meal } from '../../../services/mealsCategoryAPI'
// import RestaurantsPageNavbar from '../RestaurantsPageNavbar/RestaurantsPageNavbar'

// interface CategoryMealsProps {
//    category: string
// }

// { category }: CategoryMealsProps

const MenuCategories = (): React.JSX.Element => {
   const params = useParams<{ categoryName?: string }>()
   const categoryName = params.categoryName ?? ''

   const { data, error, isLoading } = useGetMealsByCategoryQuery(
      categoryName ?? '',
   )

   if (isLoading) {
      return <div>Loading meals...</div>
   }

   if (error) {
      return <div>Oops, something went wrong!</div>
   }
   console.log(categoryName)
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
                  <h3>{meal.strMeal}</h3>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default MenuCategories
