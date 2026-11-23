import { useState } from 'react';
import { Microscope } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Ilmiy tasvir',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#0F1733] to-[#060B1E] text-[#F8FAFC] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Microscope className="w-8 h-8 mb-3 text-[#F5A623]" strokeWidth={1.5} />
        <span className="text-sm font-medium">{fallbackTitle}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
