import type { FC, JSX, ReactNode } from 'react'

import styles from './Btn.module.css'

type BtnProps = {
   children: ReactNode
   onClick?: () => void
   variant?: 'primary' | 'secondary' | 'danger'
   disabled?: boolean
   className?: string
}

const Btn: FC<BtnProps> = ({
   children,
   onClick,
   variant = 'primary',
   disabled,
   className,
}: BtnProps): JSX.Element => {
   return (
      <button
         className={`${styles.btn ?? ''} ${styles[variant] ?? ''} ${className ?? ''}`.trim()}
         disabled={disabled}
         onClick={onClick}
      >
         {children}
      </button>
   )
}

export default Btn
