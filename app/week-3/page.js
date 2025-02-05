import ItemList from "./item-list";

export const metadata = {  
  title: "Shopping List"
}; //tab name

const Page=() =>{
  return(
    <main className="p-6 bg-zinc-800 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-zinc-500">Shopping List</h1>
      <ItemList/>
    </main>
  );
};

export default Page;
