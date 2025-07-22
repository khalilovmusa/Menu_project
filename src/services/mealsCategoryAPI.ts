import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Meal {
   idMeal: string
   strMeal: string
   strMealThumb: string
   strCategory?: string
   strArea?: string
   strInstructions?: string
   strYoutube?: string
}

export const mealsCategoryAPI = createApi({
   reducerPath: 'mealsAPI',
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://www.themealdb.com/api/json/v1/1/',
   }),
   endpoints: (builder) => ({
      getMealsByCategory: builder.query<Meal[], string>({
         query: (category) => `filter.php?c=${category}`,
         transformResponse: (response: { meals: Meal[] }) => response.meals,
      }),
      getMealItem: builder.query({
         query: (id) => `lookup.php?i=${id}`,
         transformResponse: (response: { meals: Meal[] }) => response.meals[0],
      }),
   }),
})

export const { useGetMealsByCategoryQuery } = mealsCategoryAPI
