import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../common/Button';
import ImagePlaceholder from '../common/ImagePlaceholder';

interface SpecialOfferProps {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
  discount?: string;
  backgroundColor?: string;
  textColor?: string;
  className?: string;
}

const SpecialOffer: React.FC<SpecialOfferProps> = ({
  title,
  description,
  image,
  buttonText,
  buttonLink,
  discount,
  backgroundColor = 'bg-blue-100',
  textColor = 'text-gray-900',
  className = '',
}) => {
  return (
    <div className={`${backgroundColor} rounded-lg overflow-hidden ${className}`}>
      <div className="lg:flex items-center">
        <div className="lg:w-1/2 p-8 lg:p-12">
          {discount && (
            <span className="inline-block bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded mb-4">
              {discount}
            </span>
          )}
          <h2 className={`text-3xl font-bold ${textColor} mb-4`}>{title}</h2>
          <p className={`${textColor} opacity-80 mb-6`}>{description}</p>
          <Link href={buttonLink}>
            <Button variant="primary" size="lg">{buttonText}</Button>
          </Link>
        </div>
        <div className="lg:w-1/2 relative h-64 lg:h-auto">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          ) : (
            <ImagePlaceholder 
              title={title} 
              bgColor="bg-blue-100"
              textColor="text-blue-700"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer; 