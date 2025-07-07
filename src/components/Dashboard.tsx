'use client'
import React, { useState } from 'react'
import { Mail, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Chat from "@/components/chat"; // Must be a client component
import dayjs from "dayjs";
import Link from "next/link";
import TicketList from "@/components/TicketList";
import { getChat } from '@/lib/mutations/getChat';

const Dashboard = ({ data, chat }: any) => {

  const mutation = getChat();
  const [chatResponse, setChatResponse] = useState<any>(null); // for storing API response

  const [ticketId, setTicketId] = useState();

  const handleChatClick = (ticket: String) => {

    const formData = new FormData();
    formData.append("message", "Hello");

    mutation.mutate(
      {
        id: ticket,
        formData,
      },
      {
        onSuccess: (data) => {
          console.log("Chat response:", data);
          setChatResponse(data); // Save it to show in UI
        },
        onError: (error) => {
          console.error("Error fetching chat:", error);
        },
      }
    );
  };



  return (
    <div className="max-w-[1420px] m-auto py-8">
      <h1 className="h2 px-4">Dashboard</h1>
      <div className="flex flex-col-reverse md:flex-row gap-6 mt-6">
        {/* Chat Section */}
        <div className="w-full md:w-8/12 flex flex-col p-4">
          <Chat chatResponse={chatResponse} setChatResponse={setChatResponse} user={data} />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-4/12 px-4 space-y-6">
          {/* User Info */}
          <h3 className="h3">User Information</h3>
          <Card className="shadow-sm border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">User</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  {data.user?.avatar ?   <img src={`${data.user.avatar}`} alt="avtar.jpg" width={50} height={50}/> :   <img src="http://localhost:3000/user.png" alt="avtar.jpg" width={50} height={50} />}
                
                </div>
                <div className="flex-1 grid gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {data.user?.first_name} {data.user?.last_name}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600">
                        <Mail className="h-4 w-4 mr-2" />
                        {data.user?.email}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        Joined {dayjs(data.user?.created_at).format("DD-MM-YYYY")}
                      </div>
                      <div className="flex items-center">
                        <Badge className="bg-green-500 text-white">
                          {data.user?.status === 1 ? "Active" : "Inactive"}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tickets */}
          <div>
            <h3 className="h3">Tickets</h3>
            <Card className="shadow-sm border-gray-200">
              <CardContent className="p-0">
                <div className="overflow-x-auto divide-y divide-gray-100">
                  <TicketList chat={chat} onChatClick={handleChatClick} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard