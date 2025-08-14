import * as React from 'react'
import { useNavigate } from 'react-router'

import Loading from '@components/molecules/Loading/Loading'
import { menuData } from '@store/helper/mainCategories.ts/menuData'
import basket_fill from '@assets/basket-fill.svg'
import arrow_left from '@assets/arrow-left.svg'
import arrow_right from '@assets/arrow-right.svg'

import styles from './MenuCategories.module.css'

const MenuCategories = (): React.JSX.Element => {
   const navigate = useNavigate()
   const slugify = (text: string): string =>
      text.toLowerCase().replace(/\s+/g, '-')
   if (menuData.length === 0) return <Loading text="loading" />
   return (
      <div className={styles.main}>
         <header className={styles.categories_header}>
            <button
               className={styles.return_back_btn}
               onClick={() => navigate(-1)}
            >
               <img className={styles.return_back_img} src={arrow_left} />
            </button>
            <p className={styles.menu_header}>Menu</p>
            <button className={styles.menu_cart}>
               <img className={styles.menu_cart_img} src={basket_fill} />
            </button>
         </header>
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
