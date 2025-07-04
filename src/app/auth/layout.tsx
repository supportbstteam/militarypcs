import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    // <div className="flex items-center justify-center bg-gray-100">
    <div className=" bg-gray-100 px-4  ">
      <div className="max-w-[1420px] mx-auto flex items-center justify-center py-12 flex-col ">
        <div className="w-fit bg-white shadow-md rounded-md p-6 ">
          {children}
        </div>
      </div>
    </div>
  );
}