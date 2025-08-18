import { BrowserRouter, Routes, Route } from 'react-router'
import { Provider } from 'react-redux'
import './index.css'
import type { FC } from 'react'

import MenuCategories from '@components/organisms/MenuCategories/MenuCategories.tsx'
import MenuInfo from '@components/organisms/MenuInfo/MenuInfo.tsx'
import { store } from '@store/store.ts'
import MobileApp from '@components/pages/MobileAppPage/MobileApp.tsx'
import AboutUs from '@components/pages/AboutUsPage/AboutUsPage.tsx'
import RestaurantsPage from '@components/pages/RestaurantsPage/RestaurantsPage'
import CategoryDetail from '@components/organisms/CategoryDetail/CategoryDetail'
import NotFoundPage from '@components/pages/NotFoundPage/NotFound'
import CategoryMeals from '@components/organisms/CategoryMeals/CategoryMeals'

const App: FC = () => {
   return (
      <Provider store={store}>
         <BrowserRouter>
            <Routes>
               <Route element={<RestaurantsPage />} path="/" />
               <Route element={<MenuInfo />} path="/:restaurant/:id" />
               <Route element={<MenuCategories />} path="/menu" />
               <Route element={<CategoryDetail />} path="/menu/:categorySlug" />
               <Route
                  element={<CategoryMeals />}
                  path="/menu/:categorySlug/:subCategorySlug"
               />
               <Route element={<MobileApp />} path="/mobile_app" />
               <Route element={<AboutUs />} path="/about_us" />
               <Route element={<NotFoundPage />} path="*" />
            </Routes>
         </BrowserRouter>
      </Provider>
   )
}

export default App
