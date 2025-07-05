'use client';

import React, { useState } from 'react';

const TicketList = ({ chat, onChatClick }: { chat: any[], onChatClick: (ticket: string) => void }) => {
  const [selectedTicketId, setSelectedTicketId] = useState<number | null>(null); // state to hold selected ticket ID

  const handleTicketClick = (ticket: any) => {
    setSelectedTicketId(ticket.id); // store ticket ID in state
    onChatClick(ticket.tiket);       // call the callback with the ticket name/code
    localStorage.setItem('ticket',ticket.tiket)
  };

  return (
    <>
      {chat.map((ticket) => (
        <button key={ticket.id} onClick={() => handleTicketClick(ticket)}>
          <div
            className={`flex justify-between border-b border-gray-100 transition-colors ${
              selectedTicketId === ticket.id ? 'bg-gray-200' : 'hover:bg-gray-50'
            }`}
          >
            <div className="p-4 font-medium text-gray-800">{ticket.tiket}</div>
            <div className="p-4 font-medium text-gray-800">{ticket.city}</div>
          </div>
        </button>
      ))}
    </>
  );
};

export default TicketList;
