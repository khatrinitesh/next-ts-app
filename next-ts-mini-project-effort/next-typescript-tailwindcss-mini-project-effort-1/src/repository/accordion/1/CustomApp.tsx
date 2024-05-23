"use client"
import React, { useState } from 'react';

interface AccordionItemProps{
    title:string;
    content:string;
}

interface AccordionProps{
    items:AccordionItemProps[];
}

const CustomApp:React.FC<AccordionProps> = ({items}) => {
  const [activeIndex,setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index:number) => {
    setActiveIndex(activeIndex === index ? null : index);
  }
  return (
    <div className='accordion'>
      {items.map((item,index) => (
        <div key={index} className='accordion-item border-b'>
          <button
            className="accordion-header w-full text-left px-4 py-2 bg-gray-200 hover:bg-gray-300 focus:outline-none"
            onClick={() => handleToggle(index)}
            aria-expanded={activeIndex === index}
            aria-controls={`accordion-content-${index}`}
            id={`accordion-header-${index}`}
          >
            {item.title}
          </button>
          <div
            id={`accordion-content-${index}`}
            role="region"
            aria-labelledby={`accordion-header-${index}`}
            className={`accordion-content px-4 py-2 ${activeIndex === index ? 'block' : 'hidden'}`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  )
}

export default CustomApp