import React from "react";
import { PricingPlan } from "./pricing";
import { plans } from './constants';

const Example = () => {
  return (
    <>
    <PricingTable plans={plans}/>
    </>
  )
};

export default Example;

interface PricingProps {
    plans: PricingPlan[];
  }

const PricingTable: React.FC<PricingProps> = ({ plans }) => {
  return (
    <>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((plan) => (
          <div key={plan.id} className="bg-white shadow-md p-4 rounded-lg">
            <h2 className="text-lg font-bold">{plan.name}</h2>
            <p className="text-gray-600">{plan.description}</p>
            <div className="mt-4">
              <p className="text-3xl font-bold">${plan.price}</p>
              <p className="text-gray-600">per month</p>
            </div>
            <ul className="mt-4">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <svg
                    className="h-5 w-5 fill-current mr-2"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM2.5 10a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M8 12.5a.5.5 0 01-.354-.854l4-4a.5.5 0 01.708.708l-4 4a.5.5 0 01-.354.146z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
