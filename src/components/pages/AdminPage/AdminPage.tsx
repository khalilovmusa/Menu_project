import * as React from 'react'

import logo from '@assets/companyLogo.png'

import styles from './AdminPage.module.css'

const AdminPage = (): React.JSX.Element => {
   return (
      <div className={styles.adminpage_main}>
         <div className={styles.adminpage_sideToolBar}>
            <div className={styles.sidebarPersonal}>
               <div>
                  <img className={styles.sidebarCompanyLogo} src={logo} />
               </div>
               <div className={styles.sidebarPersonalNav}>
                  <div className={styles.sidebarPersonalNav_item}>
                     Transactions
                  </div>
                  <div className={styles.sidebarPersonalNav_item}>
                     An establishment
                  </div>
                  <div className={styles.sidebarPersonalNav_item}>Staff</div>
                  <div className={styles.sidebarPersonalNav_item}>QR</div>
                  <div className={styles.sidebarPersonalNav_item}>
                     Loyalty system
                  </div>
                  <div className={styles.sidebarPersonalNav_item}>
                     Notifications
                  </div>
                  <div className={styles.sidebarPersonalNav_item}>Settings</div>
                  <div className={styles.sidebarPersonalNav_item}>
                     Technical support
                  </div>
               </div>
               <div>Logout button here</div>
            </div>
         </div>
         <div className={styles.adminpage_mainContent}>
            <div style={{ visibility: 'hidden' }}>Mobile header</div>
            <div className={styles.adminpage_topInformation} />
            <div />
         </div>
      </div>
   )
}

export default AdminPage
