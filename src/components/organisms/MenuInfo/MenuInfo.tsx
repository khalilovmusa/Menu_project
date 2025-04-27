import type { FC } from 'react'

import CompanyLogo from '@assets/companyLogo.png'
import BowlCartoon from '@assets/BowlCartoon.svg'
import FoodLogo from '@assets/FoodLogo.svg'
import BtnArrow from '@assets/arrow-up-right.svg'

import MenuHeader from '../MenuHeader/MenuHeader'
import MenuCart from '../MenuCart/MenuCart'

import styles from './MenuInfo.module.css'

const MenuInfo: FC = () => {
   return (
      <div className={styles.menu_wrapper}>
         {/*Start of the header part*/}
         <MenuHeader CompanyLogo={CompanyLogo} SecondLogo={FoodLogo} />
         {/*End of the header part*/}

         {/*Start of the menu part*/}
         <MenuCart
            BtnIcon={BtnArrow}
            CartIcon={BowlCartoon}
            HeaderText={'Menu'}
            SubHeaderText={'Delicious food you chose!'}
         />
         {/*End of the menu part*/}
      </div>
   )
}

export default MenuInfo
