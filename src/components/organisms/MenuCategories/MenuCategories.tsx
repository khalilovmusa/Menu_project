import * as React from 'react'

import { useGetCategoriesQuery } from '@services/mealsCategoryAPI'

import RestaurantsPageNavbar from '../RestaurantsPageNavbar/RestaurantsPageNavbar'
import Meals from '../Meals/Meals'

import styles from './MenuCategories.module.css'

// type SectionRefMap = { [key: string]: HTMLDivElement | null }

const MenuCategories = (): React.JSX.Element => {
   const categories = useGetCategoriesQuery()
   const categoriesData = categories.currentData

   // const [ categoriesSection, setCategoriesSections ] = React.useState([])
   // const sectionRefs = React.useRef<SectionRefMap>({})

   // const meals = []
   const [categoriesSections, setCategoriesSections] = React.useState<string[]>(
      [],
   )

   React.useEffect(() => {
      if (!categoriesData) return

      const categoryNames = categoriesData.map(
         (category) => category.strCategory,
      )
      setCategoriesSections(categoryNames)
   }, [categoriesData])

   // const scrollToSection = (name: string) => {
   //    const section = sectionRefs.current[name]
   //    if (section) {
   //       section.scrollIntoView({ behavior: 'smooth' })
   //    }
   // }
   if (!categoriesData?.length) {
      return <div>Loading please wait..</div>
   }
   return (
      <div className={styles.main}>
         <div className={styles.categories_wrapper}>
            <RestaurantsPageNavbar />
            <ul className={styles.category_container}>
               {categoriesData?.map((category) => {
                  return (
                     <li
                        className={styles.category_item}
                        key={category.idCategory}
                     >
                        <a href={`categories/${category.strCategory}`}>
                           <img
                              className={styles.category_thumbnail}
                              src={category.strCategoryThumb}
                           />
                           <p className={styles.regular_text}>
                              {category.strCategory}
                           </p>
                        </a>
                     </li>
                  )
               })}
            </ul>
         </div>
         <nav className={styles.scrollable_meals}>
            {categoriesSections?.map((section) => (
               <>
                  <p className={styles.section_header}>{section}</p>
                  <Meals categoryName={section} key={section} />
               </>
            ))}
         </nav>
      </div>
   )
}

export default MenuCategories
