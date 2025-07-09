'use client';

import React, { useState } from 'react';

const TicketList = ({ chat, onChatClick }: { chat: any[], onChatClick: (ticket: string) => void }) => {
  const [selectedTicketId, setSelectedTicketId] = useState<number | null>(null); // state to hold selected ticket ID
  const [expandedTicketId, setExpandedTicketId] = useState<number | null>(null);

  const toggleMoreInfo = (ticketId: number) => {
    setExpandedTicketId(prev =>
      prev === ticketId ? null : ticketId
    );
  };

  const handleTicketClick = (ticket: any) => {
    setSelectedTicketId(ticket.id); // store ticket ID in state
    onChatClick(ticket.tiket);       // call the callback with the ticket name/code
    localStorage.setItem('ticket', ticket.tiket)
  };
  console.log('TicketList rendered with chat:', chat);

  return (
    <>
      {chat.map((ticket) => (
        <button key={ticket.id} onClick={() => handleTicketClick(ticket)} className="w-full">
          <div
            className={` w-full md:flex justify-between items-center border-b border-gray-100 transition-colors  p-2 ${selectedTicketId === ticket.id ? 'bg-gray-200' : 'hover:bg-gray-50'
              }`}
          >
            <div className="p-4 font-medium text-gray-800">{ticket.tiket}</div>
            <span
              className="flex justify-center items-center text-white p-4 h-2 rounded-xl bg-[linear-gradient(135deg,_theme('colors.primary'),_theme('colors.secondary'))]"
              onClick={e => {
                e.stopPropagation(); // prevent ticket click
                toggleMoreInfo(ticket.id);
              }}
            >
              {expandedTicketId === ticket.id ? 'Less info' : 'Details'}
            </span>
          </div>{expandedTicketId === ticket.id && (
            <div className='md:flex items-center justify-between p-4 bg-gray-100'>
              <div className="p-4 font-medium text-gray-800">{ticket.first_name} {ticket.last_name}</div>
              <div className="p-4 font-medium text-gray-800">{ticket.current_base}</div>
              <div className="p-4 font-medium text-gray-800">{ticket.phone}</div>
            </div>
          )}
        </button>
      ))}
    </>
  );
};

export default TicketList;
