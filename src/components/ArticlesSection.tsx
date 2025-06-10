import React from "react";

const articles = [
  {
    id: 1,
    title: "Lorem Ipsum is simply dummy text of the printing.",
    excerpt: "Lorem Ipsum has been the industry's standard dummy text ever.",
    date: "20 May 2025",
    category: "Category 1",
    categoryColor: "bg-pink-100 text-pink-900",
    image: "/images/blog-image-1.webp",
  },
  {
    id: 2,
    title: "Lorem Ipsum is simply dummy text of the printing.",
    excerpt: "Lorem Ipsum has been the industry's standard dummy text ever.",
    date: "20 May 2025",
    category: "Category 2",
    categoryColor: "bg-blue-100 text-blue-900",
    image: "/images/blog-image-2.webp",
  },
  {
    id: 3,
    title: "Lorem Ipsum is simply dummy text of the printing.",
    excerpt: "Lorem Ipsum has been the industry's standard dummy text ever.",
    date: "20 May 2025",
    category: "Category 3",
    categoryColor: "bg-red-100 text-red-900",
    image: "/images/blog-image-3.webp",
  },
  {
    id: 4,
    title: "Lorem Ipsum is simply dummy text of the printing.",
    excerpt: "Lorem Ipsum has been the industry's standard dummy text ever.",
    date: "20 May 2025",
    category: "Category 1",
    categoryColor: "bg-blue-100 text-blue-900",
    image: "/images/blog-image-4.webp",
  },
];

const ArticlesSection: React.FC = () => {
  return (
    <section className="bg-white pt-8 md:pt-32  pb-8 md:pb-16">
      <div className="max-w-[1420px] mx-auto px-4 text-center">

        <div className="text-center mb-10">
          <h2 className="h2">
            CHECKOUT OUR LATEST ARTICLES
          </h2>
          <p className="text-black mb-6 md:mb-16">
            Stay informed with expert tips, PCS guidance, and real stories from the military community.
          </p>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((a) => (
            <div key={a.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <img src={a.image} alt={a.title} className="w-full h-48 object-cover" />
              
              <div className="p-5 text-left flex flex-col gap-2">
                <p className="text-sm text-gray-800">
                  MilitaryPCS <span className="mx-1">•</span> {a.date}
                </p>
                <h3 className="text-lg font-medium text-md text-black">{a.title}</h3>
                <p className="text-base text-gray-500 leading-6">{a.excerpt}</p>
                <span
                  className={`mt-2 inline-block text-xs px-4 py-2 rounded-full font-medium w-fit ${a.categoryColor}`}
                >
                  {a.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
