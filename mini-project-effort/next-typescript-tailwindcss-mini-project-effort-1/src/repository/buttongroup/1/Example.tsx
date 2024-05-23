import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "danger"; // Define button variants
}

interface ButtonGroup {
  buttons: ButtonProps[];
}

const Example: React.FC<ButtonGroup> = ({ buttons }) => {
  return (
    <>
      <div className="flex space-x-4">
        {buttons.map((button, index) => (
          <Button key={index} {...button} />
        ))}
      </div>
    </>
  );
};

export default Example;

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
}) => {
  let variantClass = "";

  switch (variant) {
    case "primary":
      variantClass = "bg-blue-500 hover:bg-blue-600 text-white";
      break;
    case "secondary":
      variantClass = "bg-gray-500 hover:bg-blue-600 text-white";
      break;
    case "danger":
      variantClass = "bg-red-500 hover:bg-blue-600 text-white";
      break;
    default:
      break;
  }

  return (
    <>
      <button
        onClick={onClick}
        className={`px-4 py-2 rounded-md focus:outline-none ${variantClass}`}
      >
        {label}
      </button>
    </>
  );
};
