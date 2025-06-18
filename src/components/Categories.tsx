import { fetchCategories } from '@/lib/query/Query'
import Link from 'next/link'
import React from 'react'

const Categories = async () => {
  const categories = await fetchCategories()
  // console.log(categories.data, "categories")

  return (
    <>
      <div className="border-1 rounded-[20px] border-gray-500 ">
        <div className="rounded-t-2xl overflow-hidden text-white text-xl font-semibold p-4  bg-[linear-gradient(135deg,_theme('colors.primary'),_theme('colors.secondary'))]"> Categories</div>
        {
          categories?.data?.map((category: any) => (
            <Link href={`category/${category.id}`} key={category.id}>
            <div className="overflow-hidden p-4 not-last:border-b-1 border-gray-500 hover:bg-[linear-gradient(135deg,_theme('colors.primary'),_theme('colors.secondary'))] rounded-b-none last:rounded-b-2xl cursor-pointer hover:text-white">{category.title}</div>
            </Link>
          ))
        }
      </div>
    </>
  )
}

export default Categories
