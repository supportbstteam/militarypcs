export const dynamic = 'force-dynamic';


import Categories from '@/components/Categories';
import { IMAGE_BASE_URL } from '@/lib/constants';
import { fetchArticles } from '@/lib/query/Query';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function Page({ params }: any) {
  const id = await Number(params.id);

  const articles = await fetchArticles();

  const article = articles?.messages?.find((a: any) => a.id === id);

  if (!article) return notFound(); // Optional: Show 404 if not found

  return (
    <div className="max-w-[1420px] mx-auto py-16 px-4 md:px-0 flex gap-8 ">
      <div className="w-3/12">
        <Categories/>
      </div>
      <div className="w-9/12 mb-6">
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            {article?.category?.title || 'Uncategorized'} &bull;{' '}
            {new Date(article.created_at).toLocaleDateString()}
          </p>
          <h1 className="text-3xl font-bold mt-2">{article.title}</h1>
        </div>

        <div className="w-full h-72 relative rounded-lg overflow-hidden mb-8">
          <Image
            src={`${IMAGE_BASE_URL}${article.image || "/globe.svg"}`}
            alt={article.title}
            fill
            className="object-cover object-top h-[300px] w-full rounded-lg"
          />
        </div>
        <p className="text-lg text-gray-700 mb-6">{article.short_desc}</p>
        <div className="prose prose-lg max-w-none text-gray-800">
          {article.full_desc}
        </div>
      </div>
    </div>
  );
}

