import { BrowserRouter, Routes, Route } from 'react-router'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import './index.css'
import MenuCategories from '@components/organisms/MenuCategories/MenuCategories.tsx'
import CategoryMeals from '@components/organisms/CategoryMeals/CategoryMeals.tsx'
import MenuInfo from '@components/organisms/MenuInfo/MenuInfo.tsx'
import { store } from '@store/store.ts'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
   <Provider store={store}>
      <BrowserRouter>
         <Routes>
            <Route element={<App />} path="/" />
            <Route element={<MenuInfo />} path="/:restaurantName" />
            <Route element={<MenuCategories />} path="/categories" />
            <Route
               element={<CategoryMeals />}
               path="/categories/:categoryName"
            />
         </Routes>
      </BrowserRouter>
   </Provider>,
)
