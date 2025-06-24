export const dynamic = 'force-dynamic';


import Breadcrumbsbanner from '@/components/shared/Breadcrumbsbanner'
import { fetchRefundPolicy } from '@/lib/query/Query'
import React from 'react'

const page = async () => {
  const infoData = await fetchRefundPolicy()
  // console.log(infoData)
  const info = infoData[1]
  return (
    <>
      <Breadcrumbsbanner />

      <section className="max-w-[1420px] mx-auto px-4 py-8">
        <div>
          <h2 className='h2'>{info.title}</h2>
          <p>{info.page_description}</p>
        </div>
      </section>
    </>
  )
}

export default page