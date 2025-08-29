import * as React from 'react'
import { useNavigate, useParams } from 'react-router'
import { useSelector } from 'react-redux'

import type { RootState } from '@store/store'
import { menuData } from '@store/helper/mainCategories.ts/menuData'
import Loading from '@components/molecules/Loading/Loading'
import arrow_right from '@assets/arrow-right.svg'
import MenuHeader from '@components/molecules/MenuHeader/MenuHeader'
import { unslugify } from 'utils/unslugify'
import { slugify } from 'utils/slugify'

import styles from './CategoryDetail.module.css'

const CategoryDetail = (): React.JSX.Element => {
   const navigate = useNavigate()
   const { categorySlug, subCategorySlug } = useParams()
   const totalPrice = useSelector((state: RootState) => state.cart.totalPrice)
   const category = menuData.find((category) => category.slug === categorySlug)
   const subCategory = subCategorySlug?.length
      ? category?.subcategories.find((sub) => sub.slug === subCategorySlug)
      : null
   const data = subCategory ? subCategory.items : category?.subcategories
   if (!category) return <Loading text="No such category" />
   return (
      <div className={styles.main}>
         <MenuHeader
            headerText={unslugify(
               subCategorySlug?.length ? subCategorySlug : (categorySlug ?? ''),
            )}
            totalPrice={totalPrice}
         />
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
