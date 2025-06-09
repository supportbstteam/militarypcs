// components/CountersSection.tsx

import CounterCard from "./CounterCard";


const CountersSection = () => {
  const data = [
    {
      icon: "/icons/counter1.webp",
      label: "Total Military Members Joined",
      value: 45870,
      prefix: "",

    },
    {
      icon: "/icons/counter2.webp",
      label: "Verified Professionals Serving",
      value: 6257,
      prefix: "",

    },
    {
      icon: "/icons/counter3.webp",
      label: "Military Families Served",
      value: 13500,
      prefix: "",

    },
    {
      icon: "/icons/counter3(Copy).webp",
      label: "Donations Raised for Military Families",
      value: 752000,
      prefix: "$",
    },
  ];

  return (
    <section className=" pb-16  ">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map((item) => (
          <CounterCard key={item.label} {...item} />
        ))}
      </div>
    </section>
  );
};

export default CountersSection;
