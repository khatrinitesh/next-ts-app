import React from "react";

const CustomApp = () => {
  let minimum = [(4,5,6,6,7,7,-1,55,12)]
  const result = Math.min(minimum)
  return (
    <>
    {result}
    </>
  )
};

export default CustomApp;
