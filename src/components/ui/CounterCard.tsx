"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";



type CounterCardProps = {
  icon: string;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
};

const CounterCard: React.FC<CounterCardProps> = ({
  icon,
  label,
  value,
  prefix = "",
  suffix = "+",
}) => {
  const { ref, inView } = useInView({ triggerOnce: false });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 20);

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 20);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <div
      ref={ref}
      className="w-full min-w-[250px] bg-white rounded-2xl px-3 py-3 shadow-sm border border-yellow-100  flex items-center gap-4">
      {/* className="w-full"> */}
      <div className="w-17 h-17 rounded-full  flex items-center justify-center">
        <Image src={icon} alt="icon" width={100} height={100} className="w-17 h-17 " />
      </div>
      <div>
        <p className="text-sm text-gray-900 mb-1">{label}</p>
        <p className="text-2xl font-bold bg-[linear-gradient(135deg,_theme('colors.primary'),_theme('colors.secondary'))] bg-clip-text text-transparent">
          {prefix}
          <span className="">{count.toLocaleString()}</span>
          {suffix}
        </p>
      </div>
    </div>
  );
};

export default CounterCard;
