import Link from "next/link"

export default function Home(){
  const assignments =[
    {week: 2, href:"/week-2"},
    {week: 3, href:"/week-3"},
    {week: 4, href:"/week-4"},
    {week: 5, href:"/week-5"},
    {week: 6, href:"/week-6"},
    {week: 7, href:"/week-7"},
    {week: 8, href:"/week-8"},
    {week: 9, href:"/week-9"},
  ]

  return(
    <main className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 p-4">
      <div className="max-w-2xl w-full bg-zinc-800 rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-white">
          CPRG 306: Web Dev 2 - Assignments</h1>
        <ul className="space-y-4">
          {assignments.map(({week, href}) =>(
            <li key={week}>
              <Link href={href} className="block w-full text-center py-2 px-4 bg-green-600 
                                  text-white rounded hover:bg-green-500 transition-colors">Week {week}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};
