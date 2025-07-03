"use client";
import DocumentHelp from "@/components/DocumentHelp";
import AuthForm from "@/components/shared/AuthForm";
import Link from "next/link";
import { useLogin } from "@/lib/mutations/useLogin"; // adjust path as needed
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { cookies } from 'next/headers'; // for server (see note below)
import { setCookie } from 'cookies-next'; // For client-side install: npm i cookies-next
import { useAuthStore } from "@/store/authStore";


export default function LoginPage() {
  const router = useRouter();

  const setIsLoggedIn = useAuthStore((state)=> state.setIsLoggedIn);

  const { mutate, isPending, isError, isSuccess, error } = useLogin();

  const handleFormSubmit = (formData: FormData) => {
    mutate(formData, {

      onSuccess: (data) => {
        setCookie('token', data.token, {
          maxAge: 60 * 60 * 24, // 1 day
          path: '/',
          secure: true,
          sameSite: 'strict',
        });
        setIsLoggedIn(true);
        // Redirect on success

        const redirectUrl = localStorage.getItem('currentUrl');
        if(redirectUrl){
          router.push(redirectUrl)
          localStorage.removeItem('currentUrl') 
        }else{
           router.push("/dashboard");
        }
      },
    });
  };
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-xl font-semibold mb-4">Login</h1>

      <AuthForm type="login" onSubmit={handleFormSubmit} status={{ isPending, isError, isSuccess, error }} />

      {isPending && <p className="text-blue-600">Logging in...</p>}
      {isError && <p className="text-red-600">Login failed: {(error as any)?.message}</p>}
      {isSuccess && <p className="text-green-600">Login successful!</p>}

      <Link href="/" className="text-sm text-blue-900 hover:underline">
        <p className="mt-4">Forget Password</p>
      </Link>
    </div>
  );
}
