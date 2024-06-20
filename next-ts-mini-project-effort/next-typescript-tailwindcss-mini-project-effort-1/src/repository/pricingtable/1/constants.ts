import { PricingPlan } from "./pricing";

export const plans: PricingPlan[] = [
  {
    id: 1,
    name: "Basic",
    description: "Lorem ipsum dolor sit amet.",
    price: 29,
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    id: 2,
    name: "Pro",
    description: "Lorem ipsum dolor sit amet.",
    price: 49,
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
  {
    id: 3,
    name: "Enterprise",
    description: "Lorem ipsum dolor sit amet.",
    price: 99,
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
  },
];
