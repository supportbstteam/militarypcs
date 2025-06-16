"use client";
import DocumentHelp from "@/components/DocumentHelp";
import AuthForm from "@/components/shared/AuthForm";
import Link from "next/link";
import { useLogin } from "@/lib/mutations/useLogin"; // adjust path as needed

export default function LoginPage() {
  const { mutate, isPending, isError, isSuccess, error } = useLogin();

  const handleFormSubmit = (formData: FormData) => {
    console.log("📨 Data received in LoginPage:");
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    mutate(formData); // ✅ this actually calls your API
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-xl font-semibold mb-4">Login</h1>

      <AuthForm type="login" onSubmit={handleFormSubmit} />

      {isPending && <p className="text-blue-600">Logging in...</p>}
      {isError && <p className="text-red-600">Login failed: {(error as any)?.message}</p>}
      {isSuccess && <p className="text-green-600">Login successful!</p>}

      <Link href="/" className="text-sm text-blue-900 hover:underline">
        <p className="mt-4">Forget Password</p>
      </Link>
    </div>
  );
}
