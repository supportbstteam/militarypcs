import ArticlesSection from '@/components/ArticlesSection'
import EventSection from '@/components/EventSection'
import Breadcrumbsbanner from '@/components/shared/Breadcrumbsbanner'
import { fetchEvent } from '@/lib/query/Query'
import React from 'react'

const page = async () => {
  const data = await fetchEvent()
  

  console.log(data.data, "data is data")
  return (
    <>
    <Breadcrumbsbanner/>
    <EventSection title="Event"/>
    </>
  )
}

export default page