import { useState, type FC } from 'react'

import geo_location from '@assets/geo-alt-fill.svg'
import three_dots from '@assets/three-dots.svg'
import Dropdown from '@components/molecules/Dropdown/Dropdown'

import styles from './RestaurantsPageNavbar.module.css'

const RestaurantsPageNavbar: FC = () => {
   const [isOpen, setIsOpen] = useState(false)
   return (
      <div className={styles.restaurants_header}>
         <div className={styles.header_location_wrapper}>
            <div className={styles.geo_location_wrapper}>
               <img className={styles.geo_location_icon} src={geo_location} />
            </div>
            <p className={styles.current_location_text}>
               Your current location
            </p>
         </div>
         <div
            className={styles.three_dots_wrapper}
            onClick={() => setIsOpen((prev) => !prev)}
         >
            <img className={styles.three_dots_icon} src={three_dots} />
            {isOpen && (
               <Dropdown
                  options={['Mobile App', 'About Us']}
                  onSelect={(option) => console.log(option + ' selected')}
               />
            )}
         </div>
      </div>
   )
}

export default RestaurantsPageNavbar
