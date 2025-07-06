import type { FC } from 'react'

//import MenuInfo from '@components/organisms/MenuInfo/MenuInfo'
import './App.css'
import RestaurantsPage from '@components/organisms/RestaurantsPage/RestaurantsPage'

const App: FC = () => {
   return (
      <div className="root">
         {/* <MenuInfo /> */}
         <RestaurantsPage />
      </div>
   )
}

export default App
