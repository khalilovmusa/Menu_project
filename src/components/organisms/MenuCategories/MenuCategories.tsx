import * as React from 'react'

import { useGetCategoriesQuery } from '@services/mealsCategoryAPI'
import Loading from '@components/molecules/Loading/Loading'

import RestaurantsPageNavbar from '../../molecules/RestaurantsPageNavbar/RestaurantsPageNavbar'
import Meals from '../Meals/Meals'

import styles from './MenuCategories.module.css'
type SectionRefMap = { [key: string]: HTMLDivElement | null }

const MenuCategories = (): React.JSX.Element => {
   const categories = useGetCategoriesQuery()
   const categoriesData = categories.currentData
   const sectionRefs = React.useRef<SectionRefMap>({})
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

   const scrollToSectionWithOffset = (name: string, offset = 250): void => {
      const sectionElem = sectionRefs.current[name]
      if (sectionElem) {
         const top =
            sectionElem?.getBoundingClientRect().top + window.scrollY - offset
         window.scrollTo({ top, behavior: 'smooth' })
      }
   }
   const trimSectionName = (name: string): string => {
      name = name.slice(0, 7).concat('...')
      return name
   }
   if (!categoriesData?.length) return <Loading text={'Loading...'} />
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
                        <a
                           onClick={() => {
                              scrollToSectionWithOffset(category.strCategory)
                           }}
                        >
                           <img
                              className={styles.category_thumbnail}
                              src={category.strCategoryThumb}
                           />
                           <p className={styles.regular_text}>
                              {category.strCategory.length > 7
                                 ? trimSectionName(category.strCategory)
                                 : category.strCategory}
                           </p>
                        </a>
                     </li>
                  )
               })}
            </ul>
         </div>
         <nav className={styles.scrollable_meals}>
            {categoriesSections?.map((section) => (
               <div
                  className={styles.section_item}
                  key={section}
                  ref={(element) => {
                     sectionRefs.current[section] = element
                  }}
               >
                  <p className={styles.section_header}>{section}</p>
                  <Meals categoryName={section} key={section} />
               </div>
            ))}
         </nav>
      </div>
   )
}

export default MenuCategories
