"use client"
import { IMAGE_BASE_URL } from "@/lib/constants";
import { fetchArticles } from "@/lib/query/Query";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider, { Settings } from "react-slick";
import Button from "./ui/Button";
import { CircleArrowRight } from "lucide-react";

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

const ArticlesSection: React.FC<Props> = async ({ title }) => {
  const articles = await fetchArticles();
    const settings: Settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      // arrows: true,
      // nextArrow: <NextArrow />,
      // prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1024, // tablet
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 640, // mobile
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  // console.log(articles.messages);
  return (
    <section className="bg-white py-8 md:py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">

        <div className="text-center mb-10 flex justify-center items-center flex-col">
          <h2 className="h2">
            Checkout Our Latest Articles
          </h2>
          <Image src="/assets/stars.png" alt=' ' width={300} height={100} />
          <div className="w-[50%] mt-12 mb-4 h-4  flex justify-center items-center ">
            <p className=" psm">Stay informed with expert tips, PCS guidance, and real stories from the military community.</p>
          </div>
        </div>
        {/* <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"> */}
          <Slider {...settings} >
          {articles.messages.map((a: Article) => (
            <Link href={`/articles/${a.id}`} className="group" key={a.id}>
              <div
                className="bg-white rounded-xl overflow-hidden mx-2 "
              >
                <Image src={`${IMAGE_BASE_URL}${a.image || "/globe.svg"}`} alt="militarypcs" width={300} height={100} className="w-full h-48 object-cover object-top rounded-2xl" unoptimized />

                <div className="flex flex-col items-start justify-between ">
                  <div className=" py-2 text-left flex flex-col gap-2">
                    <p className="pxs text-gray-400">
                      {/* MilitaryPCS <span className="mx-1">•</span>{" "} */}
                      {new Date(a.created_at).toLocaleDateString()}
                    </p>

                    <h3 className="text-lg font-semibold text-md text-black">
                      {a.title}
                    </h3>

                    <p className="psm text-black leading-6">
                      {a.short_desc}
                    </p>
                    {/* 
                  <span className="mt-2 inline-block text-xs px-4 py-2 rounded-full font-medium w-fit bg-gray-100 text-gray-800">
                    {a.category?.title || "Uncategorized"}
                  </span> */}
                  </div>

                  <Button variant="icon" size="none" color="primary">
                    <CircleArrowRight size={28} strokeWidth={1} color="#BF0A30" />more
                  </Button>
                </div>
              </div>
            </Link>
          ))}
          </Slider>
        {/* </div> */}
        <div className="mt-16">
           <Button  href="#">
                    Read All Articles
            </Button>
        </div>

      </div>

      <style jsx global>{`
        .slick-dots {
          margin-top: 1.5rem;
          
        }
        .slick-dots li button:before {
          color: #6b7280;
        }
        .slick-dots li.slick-active button:before {
          color: #b43141;
        }
        .slick-arrow {
          z-index: 10;
        }
      `}</style>
    </section>
  );
};

export default ArticlesSection;
