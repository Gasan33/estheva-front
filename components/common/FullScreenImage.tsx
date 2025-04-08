'use client';

import Image from 'next/image';
import React from 'react';

interface FullScreenImageProps {
    src: string;
    alt?: string;
    onClose: () => void;
}

const FullScreenImage: React.FC<FullScreenImageProps> = ({ src, alt = 'Full Image', onClose }) => {
    return (
        <div
            className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
            onClick={onClose}
        >
            <div className="relative w-[90%] max-w-4xl" onClick={(e) => e.stopPropagation()}>
                <Image
                    src={src}
                    alt={alt}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain rounded-md"
                />
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-50 p-2 rounded"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

export default FullScreenImage;
