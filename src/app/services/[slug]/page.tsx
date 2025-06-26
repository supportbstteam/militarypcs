import DebugExposeStore from '@/components/DebugExposeStore'
import QueryHydratorWrapper from '@/components/wrappers/QueryHydratorWrapper'
import { fetchDirectorySub } from '@/lib/query/Query'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import slugify from 'slugify'

const page = async ({ params }: any) => {
  const slug = await params.slug
  const id = slug.split('-').pop()
  // const id = Number(5)
  // console.log(id)

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
      <h2 className='h2'> {unslugify(slug)}123  </h2>
        <div className="max-w-[1420px] mx-auto px-4">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p>Find professional on the basis of</p>
            <p>state - { }</p>
            <p>city -{ }</p>
            <p>directory -{ }</p>
            <p>sub directory -{ }</p>
            </div>
          </div>
        </div>

    </div>

  )
}

export default page