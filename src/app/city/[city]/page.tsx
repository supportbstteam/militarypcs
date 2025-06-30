export const dynamic = 'force-dynamic';

import DebugExposeStore from '@/components/DebugExposeStore';
import Directory from '@/components/Directory';
import QueryHydratorWrapper from '@/components/wrappers/QueryHydratorWrapper';
import Services from '@/components/Services';
import { fetchDirectory, fetchDirectorySub, fetchLocationSub } from '@/lib/query/Query';
import Link from 'next/link';
import React from 'react'
import slugify from 'slugify';
import FilterSetter from '@/components/wrappers/FilterSetter';
import { cookies } from 'next/headers';

const page = async ({ params }: any) => {

  const cookieStore =await cookies()
  const stateId = cookieStore.get('stateId')?.value || ''

  // console.log(stateId, "stateId on city page")
  
  // ---------------- get city name and Id -------------------
  
  const stateIdNumber = Number(stateId)
  const city = await fetchLocationSub({ id: stateIdNumber }) 
  // console.log(city[0].id, "city id on city page")

  // console.log(city , 'city on city page')

  // const cities = fetchLocationSub()

  const directory = await fetchDirectory();
  // console.log(directory, "directory on city page")
  const data = await directory
  const param = await params.city

  function unslugify(slug: string) {
    if (!slug || typeof slug !== 'string') return '';
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  // const stateId = 

  // const cityId =await fetchDirectorySub()

  return (
    <>
      <section className="max-w-[1420px] mx-auto px-4 text-center">
        <h2 className='h2'>City - {unslugify(param)}</h2>
      </section>

      <section className="bg-[linear-gradient(135deg,_theme('colors.primary'),_theme('colors.secondary'))] py-8 md:py-16 ">
        <DebugExposeStore />
        <QueryHydratorWrapper keys={['city']} />
                <FilterSetter cityId={city[0].id} />

        {/* <section className="bg-primary py-16 "> */}
        <div className="max-w-[1420px] mx-auto px-4">

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {data.map((directory: any) => (
              <Link key={directory.id} href={`/directories/${slugify(directory.title)}?directory=${encodeURIComponent(directory.title)}`}>
                <div
                  className="bg-white text-center rounded-3xl overflow-hidden  hover:shadow-lg transition"
                >
                  {/* <Image src={directory.image} alt={directory.title} width={300} height={100} className="w-full" unoptimized /> */}
                  <h5 className="text-sm font-medium text-black my-3">
                    {directory.title}{directory.id}
                  </h5>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>



    </>
  )
}
export default page