import React from 'react'


// Define the interface for Bullet Color
interface ListItem {
    text: string;
    bulletColor: string;
}

const Example:React.FC<{items:ListItem[]}> = ({items}) => {
    
  return (
    <>
     <ul className="list-disc">
      {items.map((item, index) => (
        <li key={index} className={`text-${item.bulletColor}`}>
          {item.text}
        </li>
      ))}
    </ul>
    </>
  )
}

export default Example