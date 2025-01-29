export default function Page(){
   return(
   <>
        <h1 className="">About Page</h1>
        <Movie name="Catch me if you can" actor="Leonardo De Caprio" img="https://i.scdn.co/image/ab67616d0000b27311bf8bab589aeeda37b0ce56">
        </Movie>
        <Movie name= "Avengers" actor="Robert Downey Jr." img="https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_.jpg">
        </Movie>
        </>
        );
}

function Movie({name, actor, img}){
    return(
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h2>{name}</h2>
        <h3>{actor}</h3>
        <img className="h-40" scr={img}></img>
        </div>
    );
}
