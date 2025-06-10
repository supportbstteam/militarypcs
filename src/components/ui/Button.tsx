import React from "react";
import clsx from "clsx";
import type { IconType } from "react-icons";

type ButtonProps = {
  variant?: "primary" | "secondary" | "outlineWhite" | "outlineColor";
  icon?: React.ReactElement;
  iconSize?: number;
  iconClassName?: string;
  href?: string;
  className?: string;
  children: React.ReactNode;
  width?: string; // e.g., "full", "fit", "auto", or any custom width like "300px"
} & (
  | React.ButtonHTMLAttributes<HTMLButtonElement>
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
);

const Button: React.FC<ButtonProps> = ({
  variant ="primary",
  className,
  icon,
  iconSize,
  iconClassName,
  href,
  children,
  width,
  ...props
}) => {
  // const base = "min-w-[240px]  inline-flex justify-center items-center  gap-2 w-fit px-6 py-4 text-base   rounded-lg font-semibold cursor-pointer";
  const base = `min-w-[240px] w-${width}  inline-flex justify-center items-center  gap-2 w-fit px-6 py-4 text-base   rounded-lg font-semibold cursor-pointer transition shadow capitalize`;
  const variants = {
    primary: " text-white bg-[linear-gradient(135deg,_theme('colors.primary'),_theme('colors.secondary'))] hover:bg-[linear-gradient(135deg,_theme('colors.secondary'),_theme('colors.primary'))] transition duration-200",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
    outlineWhite:"border border-white text-white bg-transparent hover:bg-[linear-gradient(135deg,_theme('colors.primary'),_theme('colors.secondary'))] hover:text-white transition shadow",
    // outlineColor:"border border-[#B43141] bg-[linear-gradient(135deg,#b43141,#274768)] bg-clip-text text-transparent text hover:bg-[linear-gradient(135deg,#274768,#b43141)] hover:text-white",
    
    outlineColor:"border border-primary text-black bg-[linear-gradient(135deg,_theme('colors.primary'),_theme('colors.secondary'))] bg-clip-text text-transparent  hover:bg-[linear-gradient(135deg,_theme('colors.primary'),_theme('colors.secondary'))] ",
  };

const renderedIcon =
  icon && React.isValidElement(icon)
    ? React.cloneElement(icon as React.ReactElement<{ className?: string; size?: number }>, {
        ...(iconSize ? { size: iconSize } : {}),
        className: clsx("shrink-0", (icon.props as { className?: string }).className, iconClassName),
      })
    : null;
  const content = (
    <>
      {renderedIcon && <span>{renderedIcon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={clsx(base, variants[variant], className)}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={clsx(base, variants[variant], className)}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
};

export default Button;
