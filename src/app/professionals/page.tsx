import Professionals from '@/components/Professionals'
import ContactForm from '@/components/shared/ContactForm/[slug]/ContactForm'
import { fetchUserBytoken } from '@/lib/query/Query'
import { cookies } from 'next/headers'
import React from 'react'

const page = async() => {
 
    const cookieToken = await cookies()
    const token = cookieToken.get('token')?.value || ''

    const subDirectoryId = cookieToken.get('subDirectoryId')?.value || ''
    const subDirectory = cookieToken.get('subDirectory')?.value || ''

    const user = await fetchUserBytoken(token);

     

  return (

    <div>
      <section className="max-w-[1420px] mx-auto px-4 py-8">
      </section>
      {/* <Professionals /> */}
        <ContactForm data= {user} subDirectoryId={subDirectoryId} subDirectory={subDirectory}/>
    </div>
  )
}

export default page