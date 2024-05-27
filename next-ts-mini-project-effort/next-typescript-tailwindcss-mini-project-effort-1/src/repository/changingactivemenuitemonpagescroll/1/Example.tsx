'use client'
import React, { useState,useEffect  } from 'react'


interface MenuItem {
    id:string;
    label:string;
}

const menuItems:MenuItem[] = [
    { id: 'section1', label: 'Section 1' },
  { id: 'section2', label: 'Section 2' },
  { id: 'section3', label: 'Section 3' },
  { id: 'section4', label: 'Section 4' },
]

const Example:React.FC = () => {

    const [activeItem, setActiveItem] = useState<string>(menuItems[0].id);

    const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        for (const item of menuItems) {
          const section = document.getElementById(item.id);
          if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
              setActiveItem(item.id);
              break;
            }
          }
        }
      };

      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <>
     <div>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
        <ul className="flex justify-center space-x-4 p-4">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`${
                  activeItem === item.id ? 'text-blue-500' : 'text-gray-700'
                } hover:text-blue-500`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="pt-20">
        {menuItems.map((item) => (
          <section
            key={item.id}
            id={item.id}
            className="h-screen flex items-center justify-center bg-gray-100 mb-4"
          >
            <h2 className="text-3xl">{item.label}</h2>
          </section>
        ))}
      </div>
    </div>
    </>
  )
}

export default Example
