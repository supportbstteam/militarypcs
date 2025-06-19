import { IMAGE_BASE_URL } from "@/lib/constants";
import { fetchArticles, fetchEvent } from "@/lib/query/Query";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Article {
  id: number;
  title: string;
  short_desc: string;
  image: string;
  full_desc: string;
  created_at: string;
  category: { id: number; title: string } | null;
}

interface Props {
  title: string;
}

const EventSection: React.FC<Props> = async ({ title }) => {
  const articles = await fetchEvent();
  console.log(articles.messages, "events in the house");
  return (
    <section className="bg-white py-8 md:py-16">
      <div className="max-w-[1420px] mx-auto px-4 text-center">
        <div className="text-center mb-10">
          <h2 className="h2">CHECKOUT OUR LATEST {title}</h2>
          <p className="text-black mb-6 md:mb-16">
            Stay informed with expert tips, PCS guidance, and real stories from the military community.
          </p>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {articles.data.map((a: Article) => (
          <Link href={`/articles/${a.id}`} className="group" key={a.id}>
            <div
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <Image src={`${IMAGE_BASE_URL}${a.image || "/globe.svg"}`} alt="militarypcs" width={300} height={100} className="w-full h-48 object-cover object-top" unoptimized />

              <div className="p-5 text-left flex flex-col gap-2">
                <p className="text-sm text-gray-800">
                  MilitaryPCS <span className="mx-1">•</span>{" "}
                  {new Date(a.created_at).toLocaleDateString()}
                </p>

                <h3 className="text-lg font-medium text-md text-black">
                  {a.title}
                </h3>

                <p className="text-base text-gray-500 leading-6">
                  {a.short_desc}
                </p>

                <span className="mt-2 inline-block text-xs px-4 py-2 rounded-full font-medium w-fit bg-gray-100 text-gray-800">
                  {a.category?.title || "Uncategorized"}
                </span>
              </div>
            </div>
          </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EventSection;
