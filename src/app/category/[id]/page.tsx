import { fetchCategoryBySlug } from '@/lib/query/Query'
import React from 'react'

const page = async ({params}:any) => {
  const id = await params.id
  // console.log(id, "id is the best way to get what you want");
  const articles = await fetchCategoryBySlug(id)
  // console.log(articles)
  return (
    <div>
      
    </div>
  )
}
export default page;