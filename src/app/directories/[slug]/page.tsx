export const dynamic = 'force-dynamic';


import { fetchDirectorySub } from '@/lib/query/Query'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import slugify from 'slugify'

const page = async ({params}:any) => {
    const slug = await params.slug
    const id = slug.split('-').pop()
    // const id = Number(5)
    console.log(id)

    const services = await fetchDirectorySub({ id: id ?? 0 })
    const service = await services
    
    console.log(service, "hello")

      function unslugify(slug: string) {
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  return (
    
      <div>
        <h2 className='h2'> {unslugify(slug)}</h2>
    <section className="bg-[linear-gradient(135deg,_theme('colors.primary'),_theme('colors.secondary'))] py-8 md:py-16 ">
      {/* <section className="bg-primary py-16 "> */}
      <div className="max-w-[1420px] mx-auto px-4">

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {service.map((directory: any) => (
            <Link key={directory.id} href={`/services/${slugify(directory.title)}-${directory.id}`}>
              <div
                className="bg-white text-center rounded-3xl overflow-hidden  hover:shadow-lg transition"
              >
                {/* <Image src={`${directory.image} || "/file.svg"`}  alt={directory.title} width={300} height={100} className="w-full" unoptimized /> */}
                <h5 className="text-sm font-medium text-black my-3">
                  {directory.title}
                </h5>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
    
    
    </div>
    
  )
}

export default page