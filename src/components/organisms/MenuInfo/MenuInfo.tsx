import type { FC } from 'react'

import companyLogo from '@assets/companyLogo.png'
import bowlCartoon from '@assets/BowlCartoon.svg'
import foodLogo from '@assets/FoodLogo.svg'
import btnArrow from '@assets/arrow-up-right.svg'

import MenuHeader from '../MenuHeader/MenuHeader'
import MenuCart from '../MenuCart/MenuCart'

import styles from './MenuInfo.module.css'

const MenuInfo: FC = () => {
   return (
      <div className={styles.menu_wrapper}>
         <MenuHeader companyLogo={companyLogo} secondLogo={foodLogo} />
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
