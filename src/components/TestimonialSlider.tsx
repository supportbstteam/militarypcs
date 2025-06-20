"use client";

import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { fetchReviews, useReviews } from "@/lib/query/Query";

const testimonials = [
    {
        name: "SSG Maria T.",
        image: "/images/maria.jpg",
        text: "Thanks to MilitaryPCS, I found a veteran realtor who truly understood our needs during our PCS move!",
    },
    {
        name: "SSG Maria T.",
        image: "/images/maria.jpg",
        text: "Thanks to MilitaryPCS, I found a veteran realtor who truly understood our needs during our PCS move!",
    },
    {
        name: "SSG Maria T.",
        image: "/images/maria.jpg",
        text: "Thanks to MilitaryPCS, I found a veteran realtor who truly understood our needs during our PCS move!",
    },
    {

        name: "SSG Maria T.",
        image: "/images/maria.jpg",
        text: "Thanks to MilitaryPCS, I found a veteran realtor who truly understood our needs during our PCS move!",
    },
    {
        name: "SSG Maria T.",
        image: "/images/maria.jpg",
        text: "Thanks to MilitaryPCS, I found a veteran realtor who truly understood our needs during our PCS move!",
    },
    {
        name: "SSG Maria T.",
        image: "/images/maria.jpg",
        text: "Thanks to MilitaryPCS, I found a veteran realtor who truly understood our needs during our PCS move!",
    },
];

const TestimonialSlider: React.FC = () => {
    const reviews = useReviews()
    // console.log(reviews.data?.messages, "reviews");
    const testimonials = reviews?.data?.messages

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 },
            },
        ],
    };
    return (
        <section className="bg-[#f9f9f9] py-8 pb-14 md:py-16">
            <div className="max-w-[1420px] mx-auto text-center px-4">
                <div className="text-center md:mb-10 w-[95%]">
                    <h2 className="h2 mb-4">
                        GENUINE REVIEWS FROM MEMBERS
                    </h2>

                </div>
                <Slider {...settings}>
                    {testimonials?.map((t:any, idx:any) => (
                        <div key={idx} className="px-6">
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-left min-h-[240px] ">
                                <div className="flex mb-6 gap-1 text-yellow-500 text-lg">
                                    {Array(t?.star)
                                        .fill(0)
                                        .map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                </div>
                                <p className="text-sm text-gray-800 mb-4 md:leading-8">{t.description}</p>
                                <div className="flex items-center mt-auto">

                                    {/* <Image src={t.image} alt={t.name} width={300} height={60} className="w-12 h-12 rounded-full object-cover mr-3" /> */}

                                    <p className="font-semibold">{t.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <style jsx global>{`
        .slick-dots {
          margin-top: 2rem;
        }
        .slick-dots li button:before {
          font-size: 12px;
          color: #bbb;
        }
        .slick-dots li.slick-active button:before {
          color: #b43141;
        }
      `}</style>
        </section>
    );
};

export default TestimonialSlider;
