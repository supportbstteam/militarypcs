import { fetchLocation } from '@/lib/query/Query'
import Link from 'next/link'
import React from 'react'

const page = () => {
    const states = fetchLocation()
      // Split into 4 chunks
  if (!Array.isArray(states) || states.length === 0) return null;
  const chunkSize = Math.ceil(states.length / 4);
  const stateChunks = [
    states.slice(0, chunkSize),
    states.slice(chunkSize, chunkSize * 2),
    states.slice(chunkSize * 2, chunkSize * 3),
    states.slice(chunkSize * 3),
  ];
  // console.log(stateChunks)
  return (
    <div>
        hello
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stateChunks.map((chunk, idx) => (
            <ul key={idx} className="space-y-4">
              {chunk.map((state) => (
                <li className="text-gray-500 text-base hover:bg-[linear-gradient(135deg,_theme('colors.primary'),_theme('colors.secondary'))] hover:bg-clip-text hover:text-transparent">
                  <Link key={state.id} href={`/states/${state.location}`}>

                    {state.location}

                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
    </div>
  )
}

export default page