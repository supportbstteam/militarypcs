export const dynamic = 'force-dynamic';

import Directory from '@/components/Directory';
import Services from '@/components/Services';
import { fetchDirectory } from '@/lib/query/Query';
import React from 'react'

const page = async ({ params }: any) => {
    const directory = await fetchDirectory();
  const param = await params.city
  console.log(param, "params")

  function unslugify(slug: string) {
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  return (
    <>
      <section className="max-w-[1420px] mx-auto px-4 text-center">
        <h2 className='h2'>City - {unslugify(param)}</h2>
      </section>
      <Directory directoryData={directory} />

    </>
  )
}
export default page