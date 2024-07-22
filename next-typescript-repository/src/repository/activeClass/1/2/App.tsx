import React,{useState } from 'react'
import { Item, items } from './interface';
import './style.css';

const ActiveApp = () => {
    
  return (
    <>
     <ActiveList items={items}/>
    </>
  )
}

export default ActiveApp

const ActiveList = ({items} : {items:Item[]}) => {
    const [activeItem, setActiveItem] = useState<Item | null>(null);

    const handleClick = (item: Item) => {
      setActiveItem(item);
    };
    return(
        <>
        <ul className="active-list">
      {items.map((item) => (
        <li
          key={item.id}
          className={item === activeItem ? "active" : ""}
          onClick={() => handleClick(item)}
        >
          {item.label}
        </li>
      ))}
    </ul>
        </>
    )
}