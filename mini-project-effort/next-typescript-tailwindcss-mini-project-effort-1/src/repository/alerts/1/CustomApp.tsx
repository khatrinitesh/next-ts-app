"use client";
import AlertButton from "./Alerts";

const CustomApp = () => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Alert Buttons Example</h1>
      <AlertButton type="success" message="This is a success alert!" />
      <AlertButton type="error" message="This is an error alert!" />
      <AlertButton type="warning" message="This is a warning alert!" />
    </>
  );
};

export default CustomApp;
