import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic",
      price: "$30",
      features: [
        "Access to cardio area",
        "Use of weightlifting equipment",
        "Limited group classes",
        "Locker access",
        "Online workout planner",
      ],
    },
    {
      id: 2,
      name: "Standard",
      price: "$50",
      features: [
        "Access to all gym areas",
        "Full range of group classes",
        "Personal trainer session once a month",
        "Sauna access",
        "Nutrition consultation",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: "$80",
      features: [
        "Access to all gym facilities including spa",
        "Unlimited group classes",
        "Two personal trainer sessions per month",
        "Massage therapy",
        "Exclusive members-only events",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-5xl font-semibold my-4"> Best prices in the town</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
