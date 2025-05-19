import { NavItem } from "@/interface";


export const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Product", href: "/product" },
  { label: "Contact", href: "/contact" },
];

export const COMMENTS_API = "https://jsonplaceholder.typicode.com/comments";

// constants/accordionData.ts

export const accordionItems = [
  {
    id: 1,
    title: "What is Next.js?",
    description:
      "Next.js is a React framework that enables hybrid static & server rendering, route pre-fetching, and more.",
  },
  {
    id: 2,
    title: "What is Framer Motion?",
    description:
      "Framer Motion is a production-ready React animation library to create stunning interactive experiences.",
  },
  {
    id: 3,
    title: "Why use TypeScript?",
    description:
      "TypeScript provides static typing, better tooling, and safer, more maintainable code in large projects.",
  },
];
