"use client"
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
      className="w-full min-w-[250px] bg-white rounded-2xl px-4 py-4 shadow-sm border border-yellow-100  flex items-center gap-4">
      {/* className="w-full"> */}
      <div className="w-16 h-16 rounded-full  flex items-center justify-center">
        <img src={icon} alt="icon" className="w-16 h-16 text-white" />
      </div>
      <div>
        <p className="text-sm text-gray-900 mb-1">{label}</p>
        <p className="text-2xl font-bold bg-[linear-gradient(135deg,_#b43141,_#274768)] bg-clip-text text-transparent">
          {prefix}
          <span className="">{count.toLocaleString()}</span>
          {suffix}
        </p>
      </div>
    </div>
  );
};

export default CounterCard;
