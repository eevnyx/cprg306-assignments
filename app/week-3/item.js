const Item =({name, quantity, category}) =>{
    return(
      <li className="p-4 border rounded-lg shadow-md bg-white">
        <h2 className="text-black font-bold">{name}</h2>
        <p className="text-gray-900">Quantity:{quantity}</p>
        <p className="text-gray-900">Category:{category}</p>
      </li>
    );
  };
  
  export default Item;