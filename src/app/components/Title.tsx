import React from "react";

interface TitleProps {
  title: string;
  subtitle: string;
}

const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mt-14 mb-28">
      <h1 className="text-2xl font-semibold mb-1">{title}</h1>
      <h2 className="text-xl">{subtitle}</h2>
    </div>
  );
};

export default Title;
