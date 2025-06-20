import React from "react";
import backgroundImage from "images/Hero-1.webp";
import Breadcrumbs from "../ui/Breadcrumbs";
// import Button from "./ui/Button";


const Breadcrumbsbanner = () => {
    return (
        <section
            className="w-ful py-8 bg-[linear-gradient(135deg,_theme('colors.primary'),_theme('colors.secondary'))]">
            <div className="max-w-[1420px] mx-auto">
                <div className="flex justify-center items-center">
                    <Breadcrumbs />
                </div>
            </div>
        </section>
    );
};

export default Breadcrumbsbanner;
