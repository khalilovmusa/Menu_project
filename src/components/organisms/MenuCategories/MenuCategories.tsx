import * as React from 'react'
import { useNavigate, useParams } from 'react-router'

import { slugify } from 'utils/slugify'
import { unslugify } from 'utils/unslugify'
import Loading from '@components/molecules/Loading/Loading'
import { menuData } from '@store/helper/mainCategories.ts/menuData'
import MenuHeader from '@components/molecules/MenuHeader/MenuHeader'
import arrow_right from '@assets/arrow-right.svg'

import styles from './MenuCategories.module.css'

const MenuCategories = (): React.JSX.Element => {
   const { categorySlug } = useParams()
   const navigate = useNavigate()
   if (menuData.length === 0) return <Loading text="loading" />
   return (
      <div className={styles.main}>
         <MenuHeader headerText={unslugify(categorySlug ?? 'Menu')} />
         <ul className={styles.categories_wrapper}>
            {menuData?.map((category) => (
               <li
                  className={styles.category_item}
                  key={category.id}
                  onClick={() => navigate(slugify(category.name))}
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

export default MenuCategories
