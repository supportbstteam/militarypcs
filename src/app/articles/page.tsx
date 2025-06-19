import ArticlesSection from '@/components/ArticlesSection'
import Breadcrumbsbanner from '@/components/shared/Breadcrumbsbanner'
import React from 'react'

const page = () => {
  return (
    <div>
        <Breadcrumbsbanner/>
        <ArticlesSection title="Articles"/>
    </div>
  )
}

export default page