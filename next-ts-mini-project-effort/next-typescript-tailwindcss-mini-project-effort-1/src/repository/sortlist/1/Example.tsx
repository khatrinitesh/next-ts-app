"use client";
// CUSTOM HOOKS
import { useState, useEffect } from "react";
// NEXT/IMAGE
import Image from "next/image";
// LIBRARY
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactPlayer from "react-player";
import { Link as ScrollLink } from "react-scroll";
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

// STYLING
// import "./style.css";

// WALLPAPER
import Wallpaper1 from "../../../assets/img/wallpaper.jpg";
import Wallpaper2 from "../../../assets/img/wallpaper2.jpg";
import Wallpaper3 from "../../../assets/img/wallpaper3.jpg";
import Wallpaper4 from "../../../assets/img/wallpaper4.jpg";
// AUDIO
import Audio1 from "../../../assets/audio/SoundHelix-Song-1.mp3";
import Audio2 from "../../../assets/audio/SoundHelix-Song-2.mp3";
import Audio3 from "../../../assets/audio/SoundHelix-Song-3.mp3";

// INTERFACE

const Example: React.FC = () => {
  return (
    <>
    <SortableList/>
    </>
  );
};

export default Example;


interface ListItem {
    id: string;
    content: string;
  }

  const initialItems: ListItem[] = [
    { id: '1', content: 'Item 1' },
    { id: '2', content: 'Item 2' },
    { id: '3', content: 'Item 3' },
    { id: '4', content: 'Item 4' },
    { id: '5', content: 'Item 5' },
  ];

  const SortableList: React.FC = () => {
    const [items, setItems] = useState<ListItem[]>(initialItems);
  
    const onDragEnd = (result: DropResult) => {
      if (!result.destination) {
        return;
      }
  
      const updatedItems = [...items];
      const [reorderedItem] = updatedItems.splice(result.source.index, 1);
      updatedItems.splice(result.destination.index, 0, reorderedItem);
  
      setItems(updatedItems);
    };
  
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="sortable-list">
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-2"
            >
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <li
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      className="bg-white shadow-md rounded-lg p-4 cursor-move"
                    >
                      {item.content}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    );
  };







  