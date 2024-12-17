"use client"
import { AccordionItemProps } from '@/interface';
import useAccordionStore from '@/store/useAccordionstore';
import React from 'react';
import { motion } from 'framer-motion';

const Accoridon:React.FC<AccordionItemPropss> = ({id,title,content}) => {
    const {openItem,toggleItem} = useAccordionStore();
    
    const isOpen = openItem === id; // check if the item is open

  return (
    <>
      <div className="mb-4">
      <button
        onClick={() => toggleItem(id)}
        className="w-full text-left p-4 bg-gray-300 hover:bg-gray-400 focus:outline-none"
      >
        {title}
      </button>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        {isOpen && (
          <div className="p-4 border-t border-gray-200">
            <p>{content}</p>
          </div>
        )}
      </motion.div>
    </div>
    </>
  );
}

export default Accoridon;
