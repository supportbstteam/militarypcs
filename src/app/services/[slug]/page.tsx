import directory from '@/actions/directory'
import FilterCookieLogger from '@/components/debug/FilterCookieLogger'
import DebugExposeStore from '@/components/DebugExposeStore'
import Button from '@/components/ui/Button'
import ClientFilterSummary from '@/components/wrappers/ClientFilterSummary'
import FilterSetter from '@/components/wrappers/FilterSetter'
import QueryHydratorWrapper from '@/components/wrappers/QueryHydratorWrapper'
import { fetchDirectorySub, fetchProfessionalById } from '@/lib/query/Query'
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

  // console.log(decodedSubDirectory,"decodedSubDirectory")


  const cookieStore = await cookies()
  const directoryId = cookieStore.get('directoryId')?.value || ''

  // console.log(directoryId,"directoryId")

  // ---------------------- get all sub directory id ----------------------
  const id = 5
  // console.log(id,"directoryIdNum")

  const subDirectory = await fetchDirectorySub({ id })
  // console.log(subDirectory,"subDirectory")

  // ---------------------- get selected sub directory id ----------------------
  const selectedSubDirectory = subDirectory.find((sd: any) => sd.title === decodedSubDirectory)

  // console.log(selectedSubDirectory.id, "selectedSubDirectory")



  // --------------------------- get professionals ----------------------------

  const cookieStoreProfessionls = await cookies();

  const cookiesState = cookieStoreProfessionls.get('stateId')
  const cookiesStateId = cookiesState?.value

  const cookiesCity = cookieStoreProfessionls.get('cityId')
  const cookiesCityId = cookiesCity?.value

  const cookiesDirectory = cookieStoreProfessionls.get('directoryId')
  const cookiesDirectoryId = cookiesDirectory?.value


  console.log(cookiesStateId, cookiesCityId, cookiesDirectoryId, "cookeies data on professional page")

  const data = await fetchProfessionalById("6", "6", "5")
  // const data = await fetchProfessionalById(
  // cookiesStateId ?? "",
  // cookiesCityId ?? "",
  // cookiesDirectoryId ?? ""
  // )
  console.log(data, "professional data ")

  function unslugify(slug: string) {
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  return (
    <>
      <div className="max-w-[1420px] mx-auto px-4">
        <DebugExposeStore />
        <QueryHydratorWrapper keys={['subDirectory']} />
        <FilterSetter subDirectoryId={selectedSubDirectory.id} />

        <div className="grid">
          <div>
            <p>You are looking a professional on the basis of</p>
            <FilterCookieLogger />
          </div>
          <div>
            <Link href={`/professional/${1}`}>professional 1</Link>
          </div>
        </div>


        <p>these are the professional in your area</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
          {data.map((pro: any) => (
            // <Link href={`/` } key={pro.id}>
            <div className="bg-white flex flex-col items-center gap-4 p-4">
              <div className='flex '>
                <Image src={pro.image} alt={pro.name} width={300} height={60} className="w-16 h-16 rounded-full object-cover" />
   
              <Button href="/professionals">
                Contact Now
              </Button>
              </div>
              <div className=''>
                  <h5 className="font-semibold text-gray-800">First Name : {pro.first_name}</h5>
                  <p className="text-sm text-gray-500">Last Name : {pro.last_name}</p>
                  <p className="text-sm text-gray-500">Professional id : {pro.id}</p>
                  <p className="text-sm text-gray-500">Location id {pro.location}</p>
                  <p className="text-sm text-gray-500">subdirectory : {pro.subdirectory.title}</p>
                  <p className="text-sm text-gray-500">sublocation : {pro.sublocation.city}</p>
                </div>
            </div>
            // </Link>
          ))}
        </div>
      </div>

    </>
  )
}

export default page