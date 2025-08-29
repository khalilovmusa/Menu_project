import { useEffect, type FC } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import companyLogo from '@assets/companyLogo.png'
import bowlCartoon from '@assets/BowlCartoon.svg'
import foodLogo from '@assets/FoodLogo.svg'
import btnArrow from '@assets/arrow-up-right.svg'
import type { AppDispatch, RootState } from '@store/store'
import { selectById } from '@store/slices/restaurantsSlice'
import StarRating from '@components/molecules/StarRating/StarRating'

import MenuInfoTop from '../MenuInfoTop/MenuInfoTop'
import MenuInfoBottom from '../MenuInfoBottom/MenuInfoBottom'

import styles from './MenuInfo.module.css'

const MenuInfo: FC = () => {
   const { restaurant, id } = useParams()
   const navigate = useNavigate()
   const dispatch = useDispatch<AppDispatch>()
   const selectedRestaurant = useSelector(
      (state: RootState) => state.restaurants.selected,
   )

   useEffect(() => {
      if (id) {
         dispatch(selectById(Number(id)))
      }
   }, [id, dispatch])
   return (
      <div className={styles.menu_wrapper}>
         <StarRating />
         <div>
            <MenuInfoTop
               companyLogo={selectedRestaurant?.bannerImg ?? companyLogo}
               restaurant={restaurant ?? 'Restaurant-name'}
               secondLogo={foodLogo}
            />
            <MenuInfoBottom
               btnIcon={btnArrow}
               cartIcon={bowlCartoon}
               headerText={'Menu'}
               subHeaderText={'Delicious food you chose!'}
            />
            <button
               className={styles.return_back_button}
               onClick={() => navigate('/')}
            >
               Return to the restaurants page
            </button>
         </div>
      </div>
   )
}

export default MenuInfo
