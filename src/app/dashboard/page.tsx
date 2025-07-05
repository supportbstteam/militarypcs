import { cookies } from "next/headers";
import { fetchChatBytoken, fetchUserBytoken } from "@/lib/query/Query";
import Dashboard from "@/components/Dashboard";


const DashboardPage = async () => {


  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value || "";

  const data = await fetchUserBytoken(token);
  const chat = await fetchChatBytoken(token);


  

  const getStatusColoruser = (status: string) => {
    switch (status) {
      case "1":
        return "bg-blue-100 text-blue-800";
      case "0":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
     <Dashboard data= {data} chat={chat}/>   
  );
};

export default DashboardPage;
