import * as React from 'react'

import styles from './AdminPage.module.css'

const AdminPage = (): React.JSX.Element => {
   return (
      <div className={styles.adminpage_wrapper}>
         <nav className={styles.adminpage_sidebar}>
            <ul>
               <li>item</li>
               <li>item</li>
               <li>item</li>
            </ul>
         </nav>
         <main className={styles.adminpage_main}>
            <div className={styles.admin_empty}>
               <p>.</p>
            </div>
            <div className={styles.admin_empty}>
               <p>.</p>
            </div>
            <div className={styles.admin_empty}>
               <p>.</p>
            </div>
         </main>
      </div>
   )
}

export default AdminPage
