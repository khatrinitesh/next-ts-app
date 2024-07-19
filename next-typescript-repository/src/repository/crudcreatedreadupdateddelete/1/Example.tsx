
"use client"
import React, { useEffect,useState } from "react";

interface Item {
    id: number;
    name: string;
  }


const Example: React.FC = () => {
    const [items, setItems] = useState<Item[]>([]);     // original items
    const [newItem, setNewItem] = useState<string>(''); // add new items
    const [editingItem, setEditingItem] = useState<Item | null>(null); // update items
  
    // add item 1 create
    const addItem = () => {
      if (newItem.trim()) {
        setItems([...items, { id: Date.now(), name: newItem }]);
        setNewItem('');
      }
    };
  
    // delete item 2 remove 
    const deleteItem = (id: number) => {
      setItems(items.filter(item => item.id !== id));
    };
  
    // edit  3 edit update
    const startEditing = (item: Item) => {
      setEditingItem(item);
    };
  
    // save item 4 read
    const saveItem = () => {
      if (editingItem && editingItem.name.trim()) {
        setItems(items.map(item => (item.id === editingItem.id ? editingItem : item)));
        setEditingItem(null);
      }
    };
  
  return (
    <>
      <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">CRUD App</h1>
      <div className="mb-4">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="border p-2 mr-2"
          placeholder="Add new item"
        />
        <button onClick={addItem} className="bg-blue-500 text-white p-2 rounded">
          Add
        </button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="mb-2 flex justify-between items-center">
            {editingItem && editingItem.id === item.id ? (
              <input
                type="text"
                value={editingItem.name}
                onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                className="border p-2 mr-2"
              />
            ) : (
              <span>{item.name}</span>
            )}
            <div>
              {editingItem && editingItem.id === item.id ? (
                <button onClick={saveItem} className="bg-green-500 text-white p-2 rounded mr-2">
                  Save
                </button>
              ) : (
                <button onClick={() => startEditing(item)} className="bg-yellow-500 text-white p-2 rounded mr-2">
                  Edit
                </button>
              )}
              <button onClick={() => deleteItem(item.id)} className="bg-red-500 text-white p-2 rounded">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default Example;
