import type { FC } from 'react'
import { useParams } from 'react-router'

import companyLogo from '@assets/companyLogo.png'
import bowlCartoon from '@assets/BowlCartoon.svg'
import foodLogo from '@assets/FoodLogo.svg'
import btnArrow from '@assets/arrow-up-right.svg'

import MenuHeader from '../MenuHeader/MenuHeader'
import MenuCart from '../MenuCart/MenuCart'

import styles from './MenuInfo.module.css'

const MenuInfo: FC = () => {
   const { restaurantName } = useParams()

   return (
      <div className={styles.menu_wrapper}>
         <MenuHeader
            companyLogo={companyLogo}
            restaurantName={restaurantName ?? 'Restaurant_name'}
            secondLogo={foodLogo}
         />
         <MenuCart
            btnIcon={btnArrow}
            cartIcon={bowlCartoon}
            headerText={'Menu'}
            subHeaderText={'Delicious food you chose!'}
         />
      </div>
   )
}

export default MenuInfo
