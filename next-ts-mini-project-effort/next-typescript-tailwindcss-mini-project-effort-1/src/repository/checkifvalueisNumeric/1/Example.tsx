import React from "react";

interface NumericCheckerProps {
  value: string;
}

const Example: React.FC<NumericCheckerProps> = ({ value }) => {

    const isNumeric = (val:string):boolean => {
        return !isNaN(Number(val));
    }
  return (
    <>
      <div className="p-4">
        <div
          className={`p-2 ${isNumeric(value) ? "bg-green-200" : "bg-red-200"}`}
        >
          {isNumeric(value)
            ? "The value is numeric"
            : "The value is not numeric"}
        </div>
      </div>
    </>
  );
};

export default Example;
