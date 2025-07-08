'use client'
import { useAuthStore } from '@/store/authStore';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

const ProfessionalCard = ({ data }: { data: any }) => {
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
    const router = useRouter();
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        }
    }, []);

    const handle = (id: number) => {
        const url = `/professionals/${id}`;
        localStorage.setItem('currentUrl', url);
        router.push('/auth/login');
    };

    return (
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
            {data?.map((pro: any) => (
                <div key={pro.id} className="bg-white md:flex flex-row items-center gap-8 p-4 ">
                    <div className='flex flex-col justify-center items-center gap-4 mb-4'>
                        <Image src={pro?.image || "/user_Dummy.png"} alt={pro?.name} width={300} height={300} className="w-32 h-32 rounded-full object-cover" />

                        {isLoggedIn ? (
                        <>
                            {user?.role === 3 && (
                                <Link href={`/professionals/${pro.id}`}>
                                    <Button>
                                        Contact Now
                                    </Button>
                                </Link>
                            )}
                        </>

                        ) : (
                        <Button onClick={() => handle(pro.id)}>
                            Contact Now 
                        </Button>
                        )}

                    </div>
                    <div>
                        <h5 className="text-sm text-black font-bold "> First Name: <span className=' text-gray-500'> {pro.first_name} </span></h5>
                        <p className="text-sm text-black font-bold "> Last Name: <span className=' text-gray-500'> {pro.last_name} </span></p>
                        <p className="text-sm text-black font-bold "> State: <span className=' text-gray-500'> {pro.location?.location} </span></p>
                        <p className="text-sm text-black font-bold "> City: <span className=' text-gray-500'> {pro.sublocation?.city} </span></p>
                        <p className="text-sm text-black font-bold "> Service: <span className=' text-gray-500'> {pro.subdirectory?.title} </span></p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProfessionalCard;
