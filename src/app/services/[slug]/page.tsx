import DebugExposeStore from '@/components/DebugExposeStore'
import ClientFilterSummary from '@/components/wrappers/ClientFilterSummary'
import QueryHydratorWrapper from '@/components/wrappers/QueryHydratorWrapper'
import { fetchDirectorySub } from '@/lib/query/Query'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import slugify from 'slugify'

const page = async ({ params }: any) => {
  const slug = await params.slug
  const id = slug.split('-').pop()

  function unslugify(slug: string) {
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  return (
    <div>
      <DebugExposeStore />
      <QueryHydratorWrapper keys={['subDirectory']} />
      <div className="max-w-[1420px] mx-auto px-4">
        <h2 className='h2'> {unslugify(slug)}123  </h2>
        <p>You are looking a professional on the basis of</p>
        <ClientFilterSummary />
      </div>
    </div>
  )
}

export default page