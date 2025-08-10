import * as React from 'react'

import styles from './Loading.module.css'

const Loading = ({ text }: { text: string }): React.JSX.Element => {
   return (
      <div className={styles.wrapper}>
         <h1 className={styles.loading_header}>{text}</h1>
         <div className={styles.cooking}>
            <div className={styles.bubble} />
            <div className={styles.bubble} />
            <div className={styles.bubble} />
            <div className={styles.bubble} />
            <div className={styles.bubble} />
            <div className={styles.area}>
               <div className={styles.sides}>
                  <div className={styles.pan} />
                  <div className={styles.handle} />
               </div>
               <div className={styles.pancake}>
                  <div className={styles.pastry} />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Loading
