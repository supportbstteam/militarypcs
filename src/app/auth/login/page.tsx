// app/(auth)/login/page.tsx
import AuthForm from "@/components/shared/AuthForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto ">
      <h1 className="text-xl font-semibold mb-4">Login</h1>
      <AuthForm type="login"/>
      <Link href="/" className="text-sm text-blue-900 hover:underline">
      <p className="mt-4">Forget Password</p>
      </Link>
    </div>
  );
}
