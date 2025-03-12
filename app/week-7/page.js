"use client";
import {useState} from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

const Page=() =>{
  const [items, setItems] = useState(itemsData);
  const [sortBy, setSortBy] = useState("name");

  const handleAddItem = (newItem) =>{
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return(
    <main className="p-6 bg-zinc-800 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-zinc-500">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} sortBy={sortBy} setSortBy={setSortBy} />
    </main>
  );
};

export default Page;
