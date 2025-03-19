"use client";
import {useState} from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

const Page = () =>{
  const [items, setItems] = useState(itemsData);
  const [sortBy, setSortBy] = useState("name");
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) =>{
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (itemName) =>{
    const cleanedName = itemName.split(",")[0];
    setSelectedItemName(cleanedName);
  };

  return(
    <main className="p-6 bg-zinc-800 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-zinc-500">Shopping List</h1>
      <div className="flex gap-6 w-full max-w-6xl">
        <div className="flex-1">
          <NewItem onAddItem={handleAddItem}></NewItem>
          <ItemList items={items} sortBy={sortBy} setSortBy={setSortBy} onItemSelect={handleItemSelect}></ItemList>
        </div>
        <div className="flex-1">
          {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
        </div>
      </div>
    </main>
  );
};

export default Page;