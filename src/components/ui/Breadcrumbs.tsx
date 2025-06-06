"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Crumb = {
  label: string;
  href: string;
};

const Breadcrumbs: React.FC = () => {
  const pathname = usePathname();

  const segments = pathname
    .split("/")
    .filter(Boolean)
    .map((seg, index, arr) => {
      const href = "/" + arr.slice(0, index + 1).join("/");
      return { label: decodeURIComponent(seg), href };
    });

  const crumbs: Crumb[] = [{ label: "Home", href: "/" }, ...segments];

  return (
    <nav className="text-sm text-white flex flex-col gap-2 justify-center items-center">
      <h1 className="text-xl md:text-[42px] sm:leading-14  font-poppins font-semibold text-shadow-2xs text-shadow-gray-600 mb-0 text-white capitalize">
  {crumbs[crumbs.length - 1].label.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
</h1>
      <ol className="flex items-center gap-2">
        {crumbs.map((crumb, i) => (
          <li key={crumb.href} className="flex items-center gap-2">
            {i !== 0 && <span>&#62;</span>}
            <Link href={crumb.href} className="hover:underline capitalize">
              {crumb.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
