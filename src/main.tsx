import { BrowserRouter, Routes, Route } from 'react-router'
import { createRoot } from 'react-dom/client'

import './index.css'
import MenuCategories from '@components/organisms/MenuCategories/MenuCategories.tsx'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
   <BrowserRouter>
      <Routes>
         <Route element={<App />} path="/" />
         <Route element={<MenuCategories />} path="/categories" />
      </Routes>
   </BrowserRouter>,
)
