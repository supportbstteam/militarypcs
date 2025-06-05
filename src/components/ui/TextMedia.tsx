import React from 'react';

const TextMedia: React.FC<{
  title: string;
  subtitle: string;
  media?: React.ReactNode;
}> = ({ title, subtitle, media }) => {
  return (
    <section className="max-w-[1420px] mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-700">{subtitle}</p>
        </div>
        <div className="md:w-1/2">
          {media}
        </div>
      </div>
    </section>
  );
}   
export default TextMedia;