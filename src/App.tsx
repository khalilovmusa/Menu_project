import { BrowserRouter, Routes, Route } from 'react-router'
import { Provider } from 'react-redux'
import './index.css'
import type { FC } from 'react'

import MenuCategories from '@components/organisms/MenuCategories/MenuCategories.tsx'
import CategoryMeals from '@components/organisms/CategoryMeals/CategoryMeals.tsx'
import MenuInfo from '@components/organisms/MenuInfo/MenuInfo.tsx'
import { store } from '@store/store.ts'
import MobileApp from '@components/pages/MobileAppPage/MobileApp.tsx'
import AboutUs from '@components/pages/AboutUsPage/AboutUsPage.tsx'
import RestaurantsPage from '@components/pages/RestaurantsPage/RestaurantsPage'

const App: FC = () => {
   return (
      <Provider store={store}>
         <BrowserRouter>
            <Routes>
               <Route element={<RestaurantsPage />} path="/" />
               <Route element={<MenuInfo />} path="/:restaurant/:id" />
               <Route element={<MenuCategories />} path="/categories" />
               <Route
                  element={<CategoryMeals />}
                  path="/categories/:categoryName"
               />
               <Route element={<MobileApp />} path="/mobile_app" />
               <Route element={<AboutUs />} path="/about_us" />
            </Routes>
         </BrowserRouter>
      </Provider>
   )
}

export default App
