"use client";
import { useState, useEffect } from "react";
import { SelectableProps } from "./interface";

const Example: React.FC = () => {
  // Example options data
  const options = [
    { id: 1, label: "Option 1" },
    { id: 2, label: "Option 2" },
    { id: 3, label: "Option 3" },
  ];

  const handleSelectOption = (option: any) => {
    console.log(`Selected option: ${option.label}`);
    // Add your logic for handling selected option here
  };

  return (
    <>
      <SelectAbleComponent options={options} onSelect={handleSelectOption} />
    </>
  );
};

export default Example;

const SelectAbleComponent: React.FC<SelectableProps> = ({
  options,
  onSelect,
}) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Selectable Options</h1>
        <div className="flex flex-col space-y-2">
          {options.map((option) => (
            <div
              key={option.id}
              onClick={() => handleSelect(option)}
              className={`cursor-pointer p-4 rounded-md border ${
                selectedOption?.id === option.id
                  ? "border-blue-500 bg-blue-100"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
            >
              <p className="text-lg font-semibold">{option.label}</p>
            </div>
          ))}
        </div>
        {selectedOption && (
          <div className="mt-4">
            <p className="text-gray-600">Selected: {selectedOption.label}</p>
          </div>
        )}
      </div>
    </>
  );
};
