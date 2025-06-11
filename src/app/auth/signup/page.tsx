// app/(auth)/signup/page.tsx
import AuthForm from "@/components/shared/AuthForm";

export default function SignupPage() {
  return (
    <div className="mx-auto">
      <h1 className="text-xl font-semibold mb-4">Sign Up</h1>
      <AuthForm type="signup" />
    </div>
  );
}
