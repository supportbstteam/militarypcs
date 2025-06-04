import React from "react";
import clsx from "clsx";

type ButtonProps = {
  variant?: "primary" | "secondary" | "outline" | "outlineColor";
  icon?: React.ReactElement;
  iconSize?: number;
  iconClassName?: string;
  href?: string;
  className?: string;
  children: React.ReactNode;
} & (
  | React.ButtonHTMLAttributes<HTMLButtonElement>
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
);

const Button: React.FC<ButtonProps> = ({
  variant ,
  className,
  icon,
  iconSize,
  iconClassName,
  href,
  children,
  ...props
}) => {
  const base = "inline-flex items-center  gap-2 w-fit px-6 py-4 text-base  rounded-lg font-medium";
  const variants = {
    primary: "bg-[linear-gradient(135deg,_#b43141,_#274768)] text-white  hover:bg-[linear-gradient(135deg,_#274768,_#b43141)] transition duration-200",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
    outline:"border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#b43141] transition shadow",
    outlineColor:"border-[#B43141] border-2 bg-[linear-gradient(135deg,_#b43141,_#274768)] bg-clip-text text-transparent bg-transparent hover:bg-white hover:text-[#b43141] transition shadow",
  };

  const renderedIcon =
    icon &&
    React.cloneElement(icon, {
      size: iconSize,
      className: clsx("shrink-0", icon.props.className, iconClassName),
    });

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
