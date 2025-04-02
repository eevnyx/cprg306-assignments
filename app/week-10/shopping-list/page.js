"use client";
import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import { getItems, addItem } from "../_services/shopping-list-service";

const Page = () => {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState("name");
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else {
      const loadItems = async () => {
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
      };
      loadItems();
    }
  }, [user, router]);

  const handleAddItem = async (newItem) => {
    if (!newItem.name.trim()) return;
    const itemId = await addItem(user.uid, newItem);
    setItems((prevItems) => [...prevItems, { id: itemId, ...newItem }]);
  };

  if (!user) {
    return null;
  }

  const handleItemSelect = (itemName) => {
    const cleanedName = itemName.split(",")[0];
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="p-6 bg-zinc-800 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-zinc-500">Shopping List</h1>
      <div className="flex gap-6 w-full max-w-6xl">
        <div className="flex-1">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} sortBy={sortBy} setSortBy={setSortBy} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1">
          {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
        </div>
      </div>
    </main>
  );
};

export default Page;