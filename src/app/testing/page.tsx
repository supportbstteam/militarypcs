"use client";

import { useDirectorySub } from '@/lib/query/Query';
import React from 'react';

const Page = () => {
  const id = 6 // ✅ Replace this with actual logic or prop
  // const directory = useDirectorySub(id)
  const { data, isLoading, error } = useDirectorySub(id);

  if (isLoading) return <p>Loading sub-locations...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Sub-Locations</h1>
      <ul>
        {data?.map((item: any) => (
          <li key={item.id}>
            {item.city} {/* adjust according to actual response shape */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
