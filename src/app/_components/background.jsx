// ./src/app/_components/background.tsx

import { CldImage } from 'next-cloudinary';





async function fetchTrendingImages() {
    const res = await fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
        },
        cache: 'no-store'
    })

    const data = await res.json();
    return data
}

export async function RandomItems() {
    

    const data = await fetchTrendingImages()

    // Use Math.random to pick a random index between 0 and 9
    const randomIndex = Math.floor(Math.random() * 10)
    const randomItem = data.results[randomIndex]

    
    return randomItem
}

export function Background({ randomItem }) {
    return (
        <div className="w-full min-h-screen bg-cover">
            {randomItem && (
                <img
                    src={`https://image.tmdb.org/t/p/original${randomItem.backdrop_path}`}
                    alt={randomItem.title || randomItem.name}
                   
                    className="object-cover w-screen h-screen"
                />
            )}
            
        </div>
    )
}
