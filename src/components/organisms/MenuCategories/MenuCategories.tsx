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

import { useGetCategoriesQuery } from '@services/mealsCategoryAPI'

import RestaurantsPageNavbar from '../RestaurantsPageNavbar/RestaurantsPageNavbar'

const MenuCategories = (): React.JSX.Element => {
   const categories = useGetCategoriesQuery()
   const categoriesData = categories.currentData

   console.log(categories)

   return (
      <div>
         <RestaurantsPageNavbar />
         <ul>
            {categoriesData?.map((category) => (
               <li key={category.idCategory}>{category.strCategory}</li>
            ))}
         </ul>
      </div>
   )
}

export default MenuCategories
