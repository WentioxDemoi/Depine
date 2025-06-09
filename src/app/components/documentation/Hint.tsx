// Create a Hint component that will display a hint message when hovered over.
// White border at the left, an emoji 💡  and the message as props

interface HintProps {
  text: string;
}

export const Hint: React.FC<HintProps> = ({ text }) => {
  return (
    <div className="w-full flex my-4">
      <div className="p-2">
        <span className="text-xl pl-1 pr-2 border-l-4 border-white bg-gray-100">
          💡
        </span>
        <span className="text-lg font-light">{text}</span>
      </div>
    </div>
  );
};
