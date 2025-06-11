// app/(auth)/signup/page.tsx
import AuthForm from "@/components/shared/AuthForm";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="mx-auto">
      <h1 className="text-xl font-semibold mb-4">Sign Up</h1>
      <AuthForm type="signup" />
            <Link href="/" className="text-sm text-blue-900 hover:underline">
      <p className="mt-4">Document Help</p>
      </Link>
    </div>
  );
}
