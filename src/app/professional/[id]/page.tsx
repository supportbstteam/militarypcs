import ContactForm from '@/components/shared/ContactForm'
import React from 'react'

const page = async ({params}:any) => {
    // const id =  params
    // console.log(id)
  return (
    <div>
        <h2>this is professional page {params.id}</h2>
        <ContactForm/>

    </div>
  )
}

export default page