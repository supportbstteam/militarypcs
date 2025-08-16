import React from "react";
import clsx from "clsx";
import Link from "next/link"; // ✅ Correct import

type ButtonVariant = "primary" | "secondary" | "outline" | "icon";
type ButtonSize = "xs" | "sm" | "md" | "lg" | "full" | "none";
type ButtonColor = "black" | "white" | "gray" | "primary" | "secondary";

type ButtonProps = {
  variant?: ButtonVariant;
  icon?: React.ReactElement;
  iconSize?: number;
  iconClassName?: string;
  href?: string;
  className?: string;
  children: React.ReactNode;
  size?: ButtonSize;
  color?: ButtonColor;
  disabled?: boolean;
  width?: string; // e.g., "full", "fit", "auto", "300px"
} & (
  | React.ButtonHTMLAttributes<HTMLButtonElement>
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
);

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className,
  icon,
  iconSize,
  iconClassName,
  href,
  children,
  width,
  size = "md",
  color,
  disabled = false,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center transition-colors cursor-pointer h-fit";

  const sizeStyles: Record<ButtonSize, string> = {
    xs: "px-3 py-1 text-xs",
    sm: "px-5 py-[6px] text-sm",
    md: "px-12 py-3 text-base min-w-220",
    lg: "px-8 py-4 text-lg font-bold",
    full: "w-full px-4 py-2 text-base",
    none: "p-0",
  };

  const colorStyles: Record<ButtonColor, string> = {
    black: "text-black",
    white: "text-white",
    gray: "text-gray-400",
    primary: "text-primary",
    secondary: "text-secondary",
  };

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      "rounded-full min-w-[90px] bg-primary text-white border border-transparent hover:bg-white hover:text-black hover:border-black transition",
    secondary:
      "rounded-full min-w-[90px] bg-white border hover:border-black",
    outline:
      "rounded-full min-w-[90px] border border-white text-white bg-transparent hover:bg-white hover:text-black transition",
    icon: "w-fit bg-transparent",
  };

  const renderedIcon =
    icon && React.isValidElement(icon)
      ? React.cloneElement(icon as React.ReactElement<any>, {
          ...(iconSize ? { size: iconSize } : {}),
          className: clsx(
            "shrink-0",
            (icon.props as any).className,
            iconClassName
          ),
        })
      : null;

  const content = (
    <span className="inline-flex items-center gap-4">
      {renderedIcon}
      {children}
    </span>
  );

  const classes = clsx(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    color && colorStyles[color],
    disabled && "opacity-50 cursor-not-allowed",
    width && width !== "full" && `w-[${width}]`,
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        aria-disabled={disabled}
        onClick={disabled ? (e) => e.preventDefault() : undefined}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
};

export default Button;
