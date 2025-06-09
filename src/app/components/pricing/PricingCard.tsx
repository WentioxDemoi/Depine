interface CardProps {
  color?: string;
  className?: string;
  additionalFeats?: string[];
  usage: string;
  edition: string;
  price?: string;
  buttonText: string;
}

const PricingCard = ({
  color,
  edition,
  additionalFeats,
  usage,
  price,
  className,
  buttonText,
}: CardProps) => {
  const features = [
    "Complete access",
    "AI ✨ assistant",
    "Community Support",
    ...(additionalFeats || []),
  ];
  return (
    <div
      className={`flex flex-col items-center px-14 py-10 bg-[#242424] h-full md:h-[530px] rounded-3xl ${className}`}
    >
      <h2 className={`text-2xl font-bold text-center text-${color}`}>
        {edition} edition
      </h2>
      <p>For {usage} use</p>
      <ul className="mt-8 mx-auto list-disc flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-700">
            {feature}
          </li>
        ))}
      </ul>
      <p className="mt-10 font-bold">{price || "Free"}</p>
      <button
        className={`bg-${color} text-lg mt-5 px-4 py-2 text-black rounded-full`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;