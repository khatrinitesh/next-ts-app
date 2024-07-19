import React from 'react'

interface NavItem {
    label: string;
    href: string;
  }


  interface NavProps{
    items:NavItem[]
  }
const Example:React.FC<NavProps> = ({items}) => {
    
  return (
    <>
     <nav className="flex justify-center">
      <ul className="flex space-x-4">
        {items.map((item, index) => (
          <li key={index} className="border-b-2 border-transparent hover:border-blue-500 transition-colors duration-300">
            <a href={item.href} className="text-gray-600 hover:text-blue-500">{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
    </>
  )
}

export default Example