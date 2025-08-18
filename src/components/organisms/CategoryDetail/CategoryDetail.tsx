import * as React from 'react'
import { useNavigate, useParams } from 'react-router'

import { menuData } from '@store/helper/mainCategories.ts/menuData'
import Loading from '@components/molecules/Loading/Loading'
import arrow_right from '@assets/arrow-right.svg'
import MenuHeader from '@components/molecules/MenuHeader/MenuHeader'

import styles from './CategoryDetail.module.css'

const CategoryDetail = (): React.JSX.Element => {
   let data = null
   const navigate = useNavigate()
   const slugify = (text: string): string =>
      text.toLowerCase().replace(/\s+/g, '-')

   const { categorySlug, subCategorySlug } = useParams()
   const category = menuData.find((category) => category.slug === categorySlug)
   const subCategory = subCategorySlug?.length
      ? category?.subcategories.find((sub) => sub.slug === subCategorySlug)
      : null
   if (subCategory) {
      data = subCategory.items
   } else if (category) {
      data = category?.subcategories
   } else {
      return <Loading text="Category not found" />
   }
   return (
      <div className={styles.main}>
         <MenuHeader />
         <ul className={styles.categories_wrapper}>
            {data?.map((category) => (
               <li
                  className={styles.category_item}
                  key={category.id}
                  onClick={() => {
                     if (category.slug) {
                        navigate(slugify(category.slug))
                     }
                  }}
               >
                  <span className={styles.category_name}>{category.name}</span>
                  <span className={styles.goto_btn}>
                     <img className={styles.goto_btn_img} src={arrow_right} />
                  </span>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default CategoryDetail
