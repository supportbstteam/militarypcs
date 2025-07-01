import directory from '@/actions/directory'
import FilterCookieLogger from '@/components/debug/FilterCookieLogger'
import DebugExposeStore from '@/components/DebugExposeStore'
import ClientFilterSummary from '@/components/wrappers/ClientFilterSummary'
import FilterSetter from '@/components/wrappers/FilterSetter'
import QueryHydratorWrapper from '@/components/wrappers/QueryHydratorWrapper'
import { fetchDirectorySub } from '@/lib/query/Query'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import slugify from 'slugify'

const page = async ({ params }: any) => {
  const rawParam = await params.slug
  // console.log(rawParam, "params on services page")

    const toTitleCase = (str: string) =>
      str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());

    const decodedSubDirectory = toTitleCase(
      decodeURIComponent(String(rawParam)).replace(/and/g, "&").replace(/-/g, " ")                                                                                       
    );

  console.log(decodedSubDirectory,"decodedSubDirectory")


    const cookieStore =await cookies()
    const directoryId = cookieStore.get('directoryId')?.value || ''

  console.log(directoryId,"directoryId")

  // ---------------------- get all sub directory id ----------------------
  const id = 5
  console.log(id,"directoryIdNum")

  const subDirectory = await fetchDirectorySub({ id })
  console.log(subDirectory,"subDirectory")

  // ---------------------- get selected sub directory id ----------------------
  const selectedSubDirectory = subDirectory.find((sd:any)=>sd.title ===decodedSubDirectory )

  console.log(selectedSubDirectory.id, "selectedSubDirectory")





  function unslugify(slug: string) {
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  return (
    <>
      <DebugExposeStore />
      <QueryHydratorWrapper keys={['subDirectory']} />
      <FilterSetter subDirectoryId={selectedSubDirectory.id} />

      <div className="max-w-[1420px] mx-auto px-4">
        <div className="grid">
          <div>
            <p>You are looking a professional on the basis of</p>
            <FilterCookieLogger/>
          </div>
          <div>
            <p>these are the professional in your area</p>
            <Link href={`/professional/${1}`}>professional 1</Link>
          </div>
        </div>

        
      </div>
    </>
  )
}

export default page