'use client';

import { useState } from 'react';
import Image from 'next/image';
import { gatau } from '../layout';


export default function App() {
    const [zoomedIndex, setZoomedIndex] = useState<number |  null>(null);

    const data = [
        {
            url: '/default.jpg',
            quote: 'g,uykuiukikyyytjyy',
            author: "Agam"
        },
        {
            url: '/default.jpg',
            quote: 'g,uykuiukikyyytjyy',
            author: "Agam"
        },
        {
            url: '/default.jpg',
            quote: 'g,uykuiukikyyytjyy',
            author: "Agam"
        },
        {
            url: '/default.jpg',
            quote: 'g,uykuiukikyyytjyy',
            author: "Agam"
        },
        {
            url: '/default.jpg',
            quote: 'g,uykuiukikyyytjyy',
            author: "Agam"
        },
        {
            url: '/default.jpg',
            quote: 'g,uykuiukikyyytjyy',
            author: "Agam"
        },
        {
            url: '/default.jpg',
            quote: 'g,uykuiukikyyytjyy',
            author: "Agam"
        },
        {
            url: '/default.jpg',
            quote: 'g,uykuiukikyyytjyy',
            author: "Agam"
        },
        {
            url: '/default.jpg',
            quote: 'g,uykuiukikyyytjyy',
            author: "Agam"
        },
        {
            url: '/default.jpg',
            quote: 'g,uykuiukikyyytjyy',
            author: "Agam"
        },
        {
            url: '/default.jpg',
            quote: 'g,uykuiukikyyytjyy',
            author: "Agam"
        },
    ];

    const handleZoom = (index: number) => {
        if (zoomedIndex === index) {
            setZoomedIndex(null);
        } else {
            setZoomedIndex(index);
        }
    }

  return (


<div className="grid text-center grid-cols-2 md:grid-cols-3 gap-4 px-4">
    {data.map((ctx) => {
        return <div className="flex flex-col bg-white shadow-md text-black rounded-lg overflow-hidden gap-4 pb-4">
            <img src={ctx.url} />
            <div className="flex flex-col gap-2 justify-center items-center">
            <blockquote className="font-mono italic">"{ctx.quote}"</blockquote>
            <p className="text-sm">- {ctx.author}</p>
            </div>
        </div>
    })}
</div>

  );
}