"use client";

import { useEffect, useState } from "react";
import { getCookie } from 'cookies-next';
import { useRouter } from "next/navigation";

import { Send, User, Search, Filter, Plus, Mail, Calendar } from "lucide-react";
// import { Button } from "@/components/ui/button";
import Input from "@/components/ui/Input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Button from "@/components/ui/Button";
import Chat from "@/components/chat";
import Link from "next/link";

const DashboardPage = () => {
  const router = useRouter();

  useEffect(() => {
    const token = getCookie('token')
    if (!token) {
      router.push('/auth/login'); // Redirect to login if not authenticated
    }
  })

  const user = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    status: "Active",
    joinDate: "2024-01-15",
    totalTickets: 12,
    openTickets: 3,
    avatar: "JD"
  };

  const tickets = [
    { id: 65650881, title: "Plumbing", user: "John Doe", priority: "High", status: "Open", created: "2024-07-01", city: 'texas' },
    { id: 2, title: "Payment Problem", user: "John Doe", priority: "Medium", status: "In Progress", created: "2024-07-02" },
    { id: 3, title: "Feature Request", user: "John Doe", priority: "Low", status: "Closed", created: "2024-06-28" },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'open': return 'bg-blue-100 text-blue-800';
      case 'in progress': return 'bg-orange-100 text-orange-800';
      case 'closed': return 'bg-green-100 text-green-800';
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-[1420px] m-auto py-8">
      <h1 className="h2">Dashboard</h1>
      <div className="flex">

      {/* Chat Section - Left Side */}
      <div className="w-8/12    flex flex-col">

        <Chat />
      </div>

      {/* Main Content - Right Side */}
      <div className=" w-4/12 flex-1 px-4 space-y-6">

        {/* User Info Card */}
        <h3 className="h3">User Information</h3>
        <Card className="shadow-sm border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800"></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                {user.avatar}
              </div>
              <div className="flex-1 grid gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{user.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Mail className="h-4 w-4 mr-2" />
                      {user.email}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      Joined {user.joinDate}
                    </div>
                    <div className="flex items-center">
                      <Badge className={getStatusColor(user.status)}>
                        {user.status}
                      </Badge>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tickets Section */}
        <div>
          <h3 className="h3">Tickets</h3>
          <Card className="shadow-sm border-gray-200">
            <CardContent className="p-0">
              <div className="overflow-x-auto">

                {tickets.map((ticket) => (
                  <Link href={ticket.title}>
                    <div key={ticket.id} className="flex justify-between border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <div className="p-4 font-medium text-gray-800">{ticket.title}</div>
                      <div className="p-4 font-medium text-gray-800">{ticket.city}</div>
                      <div className="p-4">
                        <Badge className={getStatusColor(ticket.status)}>
                          {ticket.status}
                        </Badge>
                      </div>
                      <div className="p-4 text-gray-600">{ticket.created}</div>

                    </div>
                  </Link>
                ))}

              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      </div>

    </div>
  );
};

export default DashboardPage;
