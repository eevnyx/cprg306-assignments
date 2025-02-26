"use client";
import{useState} from"react";

export default function NewItem(){
  const[quantity, setQuantity] = useState(1);
  const[category, setCategory] = useState("produce");
  const[name, setName] = useState("");

  const increment = () =>{
    setQuantity((value) =>(value <20? value +1 : value));
  };
  const decrement = () =>{
    setQuantity((value) =>(value > 1? value -1 : value));
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    const item = {name, quantity, category};
    console.log(item);
    alert(`Item: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return(
    <main className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 p-4">
      <ul className="max-w-md w-full bg-zinc-800 rounded-lg p-6 text-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Item Name"required
            className="p-2 rounded bg-zinc-700 text-white placeholder-gray-400 
            focus:outline-none focus:ring-2 focus:ring-blue-500">
            </input>

          <div className="flex items-center justify-left gap-2">
          <h1 className="text-white">Quantity: {quantity}</h1>
            <button type="button" onClick={decrement}disabled={quantity === 1}
              className="px-4 py-2 bg-red-500 text-white rounded disabled:bg-gray-600 
                        hover:bg-red-400 transition-colors">-</button>

            <button type="button" onClick={increment} disabled={quantity === 20}
              className="px-4 py-2 bg-green-500 text-white rounded disabled:bg-gray-600 
                        hover:bg-green-400 transition-colors">+</button>
          </div>

          <select value={category} onChange={(e) => setCategory(e.target.value)}
            className="p-2 rounded bg-zinc-700 text-white 
                      focus:outline-none focus:ring-2 focus:ring-blue-500">
            {[
              "Produce","Dairy",
              "Bakery","Meat",
              "Frozen Foods","Canned Goods",
              "Dry Goods","Beverages",
              "Snacks","Household",
              "Other"
             ].map((cat) =>(
              <option key={cat} value={cat.toLowerCase()}>{cat}</option>
            ))}
          </select>

          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded 
            hover:bg-blue-400 transition-colors disabled:bg-gray-600">Submit</button>
        </form>
      </ul>
    </main>
  );
};
