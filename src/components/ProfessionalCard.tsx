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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
            {data?.map((pro: any) => (
                <div key={pro.id} className="bg-white flex flex-row items-center gap-4 p-4">
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <Image src={pro?.image || "/user_Dummy.png"} alt={pro?.name} width={300} height={300} className="w-32 h-32 rounded-full object-cover" />
                        {user?.role === 3 && (
                            isLoggedIn ? (
                                <Link href={`/professionals/${pro.id}`}>
                                    <Button>
                                        Contact Now
                                    </Button>
                                </Link>
                            ) : (
                                <Button onClick={() => handle(pro.id)}>
                                    Contact Now {pro.id}
                                </Button>
                            )
                        )}
                    </div>
                    <div>
                        <h5 className="font-semibold text-gray-800">First Name: {pro.first_name}</h5>
                        <p className="text-sm text-gray-500">Last Name: {pro.last_name}</p>
                        <p className="text-sm text-gray-500">Professional id: {pro.id}</p>
                        <p className="text-sm text-gray-500">Location: {pro.location?.location}</p>
                        <p className="text-sm text-gray-500">Subdirectory: {pro.subdirectory?.title}</p>
                        <p className="text-sm text-gray-500">Sublocation: {pro.sublocation?.city}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProfessionalCard;
