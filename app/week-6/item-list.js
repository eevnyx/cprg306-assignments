"use client";
import {useState} from "react";
import Item from "./item";
import items from "./items.json";

const ItemList = () =>{
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) =>{
    if (sortBy === "name"){
      return a.name.localeCompare(b.name);
    } 
    else if (sortBy === "category"){
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return(
    <div className="p-4 bg-zinc-700 text-white rounded-lg max-w-4xl w-full">
      <h1 className="mb-4 flex gap-2">
        
        <button
          className={`px-4 py-2 rounded ${sortBy === "name" ? "bg-blue-500" : "bg-gray-500"}`}
          onClick={() => setSortBy("name")}>Name</button>

        <button
          className={`px-4 py-2 rounded ${sortBy === "category" ? "bg-blue-500" : "bg-gray-500"}`}
          onClick={() => setSortBy("category")}>Category</button>
      </h1>
      
      <h2 className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {sortedItems.map((item) =>(
          <Item key={item.id}{...item}></Item>
        ))}
      </h2>
    </div>
  );
};

export default ItemList;
