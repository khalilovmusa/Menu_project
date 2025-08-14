import * as React from 'react'
import { useParams } from 'react-router'

import { menuData } from '@store/helper/mainCategories.ts/menuData'
import Loading from '@components/molecules/Loading/Loading'

const CategoryDetail = (): React.JSX.Element => {
   const { categorySlug, subCategorySlug } = useParams()
   const category = menuData.find((category) => category.slug === categorySlug)
   const subCategory = subCategorySlug
      ? category?.subcategories.find((sub) => sub.slug === subCategorySlug)
      : null
   console.log(subCategory)
   if (!category) return <Loading text="Category not found" />
   return <div>Category Details: {subCategory?.items[0].name}</div>
}

export default CategoryDetail
