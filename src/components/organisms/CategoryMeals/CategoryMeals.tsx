import { useEffect, useState, type FC } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

type Meal = {
   idMeal: string
   strMeal: string
   strMealThumb: string
}

const CategoryMeals: FC = () => {
   const { categoryName } = useParams()
   const [meals, setMeals] = useState<Meal[] | null>(null)
   const [isLoading, setIsLoading] = useState(true)
   const [error, setError] = useState('')

   useEffect(() => {
      if (!categoryName) return
      axios
         .get(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`,
         )
         .then((res) => {
            setMeals(res.data.meals)
            setIsLoading(false)
         })
         .catch((err) => {
            setError(err.message || 'Something went wrong')
            setIsLoading(false)
         })
   }, [categoryName])

   if (isLoading) return <div>Loading meals...</div>
   if (error) return <div>Error: {error}</div>

   return (
      <div
         style={{
            padding: '20px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
         }}
      >
         {meals?.map((meal) => (
            <div key={meal.idMeal} style={{ textAlign: 'center' }}>
               <img
                  alt={meal.strMeal}
                  src={meal.strMealThumb}
                  style={{ width: '100%', borderRadius: '10px' }}
               />
               <h3>{meal.strMeal}</h3>
            </div>
         ))}
      </div>
   )
}

export default CategoryMeals
