"use client";
import { headerdata } from "@/constants/constants";
import Link from "next/link";
import {  usePathname } from "next/navigation";

const Headers:React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="header bg-black">
      <div className="container mx-auto">
        <ul className="flex">
          {headerdata.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.url} // Use the correct URL property
                  className={`text-white p-2 block capitalize ${
                    pathname === item.url ? 'active' : ''
                  }`}
                >
                  {item.textAnchor} {/* Display the textAnchor */}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </header>
  );
};

export default Headers;
