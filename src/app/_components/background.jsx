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
    const res = await fetchTrendingImages()

    // Use Math.random to pick a random index between 0 and 12
    if (!Array.isArray(res)) {
        throw new Error("Expected an array of movies");
    }

    const randomIndex = Math.floor(Math.random() * res.length);
    const randomItem = res[randomIndex];

    return randomItem
}

export function Background({ randomItem }) {
    return (
        <div className="w-full min-h-screen bg-cover">
            {randomItem && (
                <CldImage
                    src={`https://image.tmdb.org/t/p/original${randomItem.backdrop_path}`}
                    alt={randomItem.title || randomItem.name}
                    fill
                    deliveryType='fetch'
                    className="object-cover"
                />
            )}
        </div>
    )
}
