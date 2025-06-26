export const dynamic = 'force-dynamic';


import Breadcrumbsbanner from '@/components/shared/Breadcrumbsbanner'
import { fetchInformation } from '@/lib/query/Query'
import React from 'react'

const Page = async () => {
  const infoData = await fetchInformation()
  // console.log(infoData)

  const privacyPolicy = JSON.parse(infoData.privacy_policy || '[]');


// For example, get the first privacy policy object
const info = privacyPolicy[0]
// console.log(info)
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

export default Page