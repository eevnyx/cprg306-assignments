"use client";
import{useState} from"react";

export default function NewItem(){
  const[quantity, setQuantity] = useState(1);

  const increment = () =>{
    setQuantity((value) =>(value <20? value +1 : value));
  };
  const decrement = () =>{
    setQuantity((value) =>(value > 1? value -1 : value));
  };

  return(
    <main className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 p-4">
      <ul className="max-w-md w-full bg-zinc-800 rounded-lg p-6 text-center">
        <h1 className="text-xl text-white mb-4">Quantity: {quantity}</h1>
        
          <button onClick={decrement} disabled={quantity === 1} 
          className="px-4 py-2 bg-red-500 text-white rounded disabled:bg-gray-600 
                        hover:bg-red-400 transition-colors">-</button>

          <button onClick={increment} disabled={quantity === 20}
            className="px-4 py-2 bg-green-500 text-white rounded disabled:bg-gray-600 
                        hover:bg-green-400 transition-colors">+</button>
        </ul>
    </main>
  );
};
