'use client'
import React, { useState, useEffect, useRef } from 'react';
import Input from './ui/Input';
import Button from './ui/Button';
import { Send } from 'lucide-react';
import dayjs from "dayjs";
import axios from 'axios';

const Chat = ({ chatResponse, setChatResponse, user }: any) => {
  const [newMessage, setNewMessage] = useState("");

  const chatContainerRef = useRef<HTMLDivElement>(null); // 👈 ref for .appendMessage

  const sendMessage = async () => {
    const ticketId = localStorage.getItem("ticket");
    if (!ticketId || !newMessage.trim()) return;

    const formData = new FormData();
    formData.append("ticket", ticketId);
    formData.append("sender_id", user.user.id);
    formData.append("message", newMessage);

    try {
      const res = await axios.post(
        "https://teamwebdevelopers.com/MilitaryPCS/api/store-chat",
        formData
      );

      const newMsg = res.data;

      setChatResponse((prev: any[]) => [...prev, newMsg]);
      setNewMessage("");
    } catch (err) {
      console.error("Failed to send message", err);
    }
  };

  // 🔽 Scroll to bottom inside appendMessage container
  useEffect(() => {
    const container = chatContainerRef.current;
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [chatResponse]);

  return (
    <div className='border-1 border-gray-200 rounded-xl'>
      <div
        ref={chatContainerRef}
        className="appendMessage flex-1 overflow-y-auto p-4 space-y-4 max-h-[65vh] min-h-[65vh]"
      >
        {chatResponse && chatResponse.length > 0 ? (
          chatResponse?.map((msg: any, index: number) => (
            <div key={msg.id || index} className={`flex ${msg.sender_id === user.user.id ? 'justify-end' : 'justify-start'} mb-2`}>
              <div className={`max-w-[80%] sm:max-w-xs rounded-lg p-3 break-words ${msg.sender_id === user.user.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}>
                <div className="text-sm font-medium mb-1">{msg.sender}</div>
                <div className="text-sm">{msg.message}</div>
                <div className={`text-xs mt-1 text-right ${msg.sender_id === user.user.id ? 'text-blue-100' : 'text-gray-500'}`}>
                  {dayjs(msg.created_at).format("DD-MM-YYYY")}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 mt-4">Please load chat</div>
        )}
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="grid grid-cols-[7fr_1fr] space-x-2 justify-between items-center">
          <Input
            value={newMessage}
            onChange={(e: any) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            onKeyDown={(e: any) => e.key === 'Enter' && sendMessage()}
            className="w-full border-gray-200 focus:border-blue-500 py-2"
          />
          <button onClick={sendMessage} className="flex justify-center items-center text-white p-4 rounded-xl bg-[linear-gradient(135deg,_theme('colors.primary'),_theme('colors.secondary'))]">
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
