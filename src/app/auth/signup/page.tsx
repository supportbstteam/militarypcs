"use client";
import AuthForm from "@/components/shared/AuthForm";
import { useRegister } from "@/lib/mutations/useRegister";
import Link from "next/link";

export default function SignupPage() {
  const { mutate, isPending, isSuccess, isError, error } = useRegister();
  const handleFormSubmit = (formData: FormData) => {
    console.log("📨 Data received in SignupPage:", formData);
    // Next: Call your API here
    mutate(formData); //  This sends data to your API

  };

  return (
    <div className="mx-auto">
      <h1 className="text-xl font-semibold mb-4">Sign Up</h1>

      <AuthForm type="signup" onSubmit={handleFormSubmit} />

      {isPending && <p>Submitting...</p>}
      {isSuccess && <p className="text-green-600">Registration successful!</p>}
      {isError && <p className="text-red-600">{(error as Error).message}</p>}

      <Link href="/" className="text-sm text-blue-900 hover:underline">
        <p className="mt-4">Document Help</p>
      </Link>
    </div>
  );
}
