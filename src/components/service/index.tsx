'use client'
import { useAuthStore } from '@/store/authStore';
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'

const ServiceIndex = ({ data }: { data: any }) => {
     const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
    {data?.map((pro: any) => (
       <div key={pro.id} className="bg-white flex flex-col items-center gap-4 p-4">
          <div className='flex '>
          <Image src={pro.image} alt={pro.name} width={300} height={60} className="w-16 h-16 rounded-full object-cover" />
          {isLoggedIn ? <Link href={`/professionals/${pro.id}`}>
          Contact Now
        </Link> : <Link href="/auth/login">
          Contact Now
        </Link>}
          </div>
          <div className=''>
            <h5 className="font-semibold text-gray-800">First Name : {pro.first_name}</h5>
            <p className="text-sm text-gray-500">Last Name : {pro.last_name}</p>
            <p className="text-sm text-gray-500">Professional id : {pro.id}</p>
            <p className="text-sm text-gray-500">Location id {pro.location.location}</p>
            <p className="text-sm text-gray-500">subdirectory : {pro.subdirectory.title}</p>
            <p className="text-sm text-gray-500">sublocation : {pro.sublocation.city}</p>
          </div>
        </div>
    ))}
  </div>
  )
}

export default ServiceIndex