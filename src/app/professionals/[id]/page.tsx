import ContactForm from '@/components/shared/ContactForm/[slug]/ContactForm'
import React from 'react'
import { fetchUserBytoken } from '@/lib/query/Query'
import { cookies } from 'next/headers'

const page = async() => {

   const cookieToken = await cookies()
      const token = cookieToken.get('token')?.value || ''
  
      const user = await fetchUserBytoken(token);


  return (
    <div>

        <ContactForm data= {user} />
    </div>
  )
}

export default page