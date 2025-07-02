import React, { useState } from 'react'
import Input from './ui/Input';
import Button from './ui/Button';
import { Send } from 'lucide-react';

const Chat = () => {

    const [messages, setMessages] = useState([
        { id: 1, sender: "John Doe", message: "Hello, I need help with my account", time: "10:30 AM", isUser: false },
        { id: 2, sender: "You", message: "Hi! I'd be happy to help you with that.", time: "10:32 AM", isUser: true },
        { id: 3, sender: "John Doe", message: "I can't access my dashboard", time: "10:33 AM", isUser: false },
      ]);
      const [newMessage, setNewMessage] = useState("");
      const sendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        sender: "You",
        message: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isUser: true
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };
  return (
    <div className='border-1 border-gray-200 rounded-xl'>
    {/* <h3 className="h3">Chat</h3> */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[65vh] min-h-[65vh] ">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs rounded-lg p-3 ${
                msg.isUser 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
                <div className="text-sm font-medium mb-1">{msg.sender}</div>
                <div className="text-sm">{msg.message}</div>
                <div className={`text-xs mt-1 ${
                  msg.isUser ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {msg.time}
                </div>
              </div>
            </div>
          ))}
        </div>
                {/* Message Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex space-x-2 justify-between">
            <Input
              value={newMessage}
              onChange={(e:any) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              onKeyDown={(e:any) => e.key === 'Enter' && sendMessage()}
              className="w-5/6 border-gray-200 focus:border-blue-500"
            />
            <Button onClick={sendMessage} className="bg-blue-500 hover:bg-blue-600">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
    </div>

  )
}

export default Chat