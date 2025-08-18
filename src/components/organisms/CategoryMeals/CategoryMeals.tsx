import * as React from 'react'
import { useParams } from 'react-router'

import { menuData } from '@store/helper/mainCategories.ts/menuData'
import MenuHeader from '@components/molecules/MenuHeader/MenuHeader'

import styles from './CategoryMeals.module.css'

const CategoryMeals: React.FC = () => {
   const { categorySlug, subCategorySlug } = useParams()
   const category = menuData.find((category) => category.slug === categorySlug)
   const subCategory = categorySlug?.length
      ? category?.subcategories.find((sub) => sub.slug === subCategorySlug)
      : null
   const data = subCategory?.items
   const unslugify = (name: string): string => {
      const words = name.split('-')
      const [first, ...rest] = words
      const firstWordCapitalize = first.charAt(0).toUpperCase() + first.slice(1)
      return [firstWordCapitalize, ...rest].join(' ')
   }
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
                  <p>{meal.name}</p>
                  <h3>{meal.name}</h3>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default CategoryMeals
