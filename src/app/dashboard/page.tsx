    "use client";

import { useEffect } from "react";
import { getCookie } from 'cookies-next';
import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const router = useRouter();

  useEffect(()=>{
    const token = getCookie('token')
    if (!token) {
      router.push('/login'); // Redirect to login if not authenticated
    }
  })

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Welcome! You are logged in.</p>
      
    </div>
  );
};

export default DashboardPage;
