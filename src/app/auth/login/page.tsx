// app/(auth)/login/page.tsx
import AuthForm from "@/components/shared/AuthForm";

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto ">
      <h1 className="text-xl font-semibold mb-4">Login</h1>
      <AuthForm type="login"/>
    </div>
  );
}
