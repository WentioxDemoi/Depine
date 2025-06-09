// Composant Card
"use client";
import React from 'react';

interface CardProps {
    image: string;
    alt: string;
    w: number;
    h: number;
}

const Card: React.FC<CardProps> = ({ image, alt, w, h }) => {
    return (
        <div className="h-full w-full flex items-center justify-center space-x-8">
            <img 
                src={image} 
                alt={alt} 
                height={h}
                width={w}
                className=" object-cover" // Remplit le conteneur
            />
        </div>
    );
};

export default Card;
