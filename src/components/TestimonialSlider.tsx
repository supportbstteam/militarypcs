"use client";

import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { fetchReviews, useReviews } from "@/lib/query/Query";
import Button from "./ui/Button";
import { CircleArrowRight } from "lucide-react";

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
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
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
        <section className=" py-8 pb-14 md:py-16 bg-contain bg-top bg-no-repeat md:bg-cover"
            style={{
                backgroundImage: `  ${"url('/assets/testimonial.png')"}`,
            }}>
            <div className="max-w-5xl mx-auto text-center px-4">
                <div className="text-center mb-10 flex justify-center items-center flex-col">
                    <h2 className="h2">
                        Genuine Reviews from Members
                    </h2>
                    <Image src="/assets/stars.png" alt=' ' width={300} height={100} />

                </div>
                <Slider {...settings}>
                    {testimonials?.map((t: any, idx: any) => (
                        <div key={idx} className="px-2">
                            <div className="bg-white rounded-xl shadow-lg text-left min-h-[240px] overflow-hidden">
                                <div className="py-6 px-8">

                                    <div className="flex mb-6 gap-1 text-yellow-500 text-lg  ">
                                        {Array(t?.star)
                                            .fill(0)
                                            .map((_, i) => (
                                                <FaStar key={i} />
                                            ))}
                                    </div>
                                    <Image src="/icons/quotation.png" alt="quotation" width={20} height={10} />
                                    <p className="psm text-gray-800 my-2 md:leading-8 ">{t.description}</p>
                                </div>

                                <div className="flex items-center mt-auto bg-primary p-6 px-8 ">


                                    <p className="font-semibold text-white">{t.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className="flex justify-end items-end mt-6">
                    <Button variant="icon" size="none">View All Reviews
                        <CircleArrowRight size={28} strokeWidth={1} />
                    </Button>
                </div>
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
const NextArrow: React.FC<any> = ({ onClick }) => (
    <div
        className="absolute   right-[-150px] top-1/2 transform -translate-y-1/2 pr-4 cursor-pointer text-gray-600 hover:text-black"
        onClick={onClick}
    >
        {/* <FaChevronRight size={24} />  */}
        <Image src="/icons/arrowRight.png" alt="icon" width={60} height={100}></Image>
    </div>
);

const PrevArrow: React.FC<any> = ({ onClick }) => (
    <div
        className="absolute   left-[-150px] top-1/2 transform -translate-y-1/2 pl-4 cursor-pointer text-gray-600 hover:text-black"
        onClick={onClick}
    >
        {/* <FaChevronLeft size={24} /> */}
        <Image src="/icons/arrowLeft.png" alt="icon" width={60} height={100}></Image>
    </div>
);

export default TestimonialSlider;
