import { type FC } from 'react'

import styles from './Dropdown.module.css'

interface DropdownProps {
   options: string[]
   onSelect?: (option: string) => void
}

const Dropdown: FC<DropdownProps> = ({ options, onSelect }) => {
   return (
      <div className={styles.dropdown_wrapper}>
         <ul className={styles.dropdown_ul}>
            {options &&
               options.map((option) => (
                  <li
                     className={styles.dropdown_item}
                     key={option}
                     onClick={() => onSelect?.(option)}
                  >
                     {option}
                  </li>
               ))}
         </ul>
      </div>
   )
}

export default Dropdown
