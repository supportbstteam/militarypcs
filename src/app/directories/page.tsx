export const dynamic = 'force-dynamic';
import Directory from '@/components/Directory';
import { fetchDirectory, useDirectorySub } from '@/lib/query/Query';
import React from 'react';

const Page = async () => {
  const directory = await fetchDirectory();

  return (
    <div>
      <Directory directoryData={directory} />
    </div>
  );
};

export default Page;
