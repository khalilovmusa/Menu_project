import * as React from 'react'

import { useGetCategoriesQuery } from '@services/mealsCategoryAPI'

import RestaurantsPageNavbar from '../RestaurantsPageNavbar/RestaurantsPageNavbar'

import styles from './MenuCategories.module.css'

const MenuCategories = (): React.JSX.Element => {
   const categories = useGetCategoriesQuery()
   const categoriesData = categories.currentData

   return (
      <div className={styles.categories_wrapper}>
         <RestaurantsPageNavbar />
         <ul className={styles.category_container}>
            {categoriesData?.map((category) => (
               <li className={styles.category_item} key={category.idCategory}>
                  <a href={`categories/${category.strCategory}`}>
                     <img
                        className={styles.category_thumbnail}
                        src={category.strCategoryThumb}
                     />
                     {category.strCategory}
                  </a>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default MenuCategories
