import React from 'react'


// Define the interface for Bullet Color
interface ListProps  {
    items: string;
  }

const Example:React.FC<ListProps> = ({items}) => {
    
  return (
    <>
     <ul className="list-disc list-inside">
      {items.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </ul>
    </>
  )
}

export default Example

interface ListItemProps{
    item:string;
}

const ListItem: React.FC<ListItemProps> = ({ item }) => {
    return (
      <li className="text-black">{item}</li>
    );
  };