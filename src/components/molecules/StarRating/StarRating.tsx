import { useState, type FC } from 'react'
import { FaStar } from 'react-icons/fa'

import styles from './StarRating.module.css'

interface StarRatingProps {
   amountOfStars?: number
}

const StarRating: FC<StarRatingProps> = ({ amountOfStars = 5 }) => {
   const [rating, setRating] = useState(0)
   const [hover, setHover] = useState(0)

   const handleClick = (getCurrentIndex: number): void => {
      setRating(getCurrentIndex)
   }

   const handleMouseEnter = (getCurrentIndex: number): void => {
      setHover(getCurrentIndex)
   }

   const handleMouseLeave = (): void => {
      setHover(rating)
   }

   return (
      <div className={styles.stars_wrapper}>
         <h2 className={styles.stars_header}>Rate us</h2>
         {[...Array(amountOfStars)].map((_, index) => {
            index += 1
            return (
               <FaStar
                  className={
                     index <= (hover || rating)
                        ? styles.active
                        : styles.inactive
                  }
                  key={index}
                  size={40}
                  onClick={() => handleClick(index)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave()}
               />
            )
         })}
      </div>
   )
}

export default StarRating
