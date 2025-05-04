
import React from 'react';

const Logo: React.FC<{ size?: 'small' | 'medium' | 'large' }> = ({ size = 'medium' }) => {
  const dimensions = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  return (
    <div className="flex items-center">
      <div className={`${dimensions[size]} mr-3`}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-writeEdge-gold">
          <path d="M6 6L14 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M6 10H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 14H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 18H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M2 21.4V2.6C2 2.26863 2.26863 2 2.6 2H21.4C21.7314 2 22 2.26863 22 2.6V21.4C22 21.7314 21.7314 22 21.4 22H2.6C2.26863 22 2 21.7314 2 21.4Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M6 22V13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M9 22V13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
      <h1 className={`font-bold text-writeEdge-gold ${
        size === 'small' ? 'text-xl' : size === 'medium' ? 'text-2xl' : 'text-3xl'
      }`}>WriteEdge</h1>
    </div>
  );
};

export default Logo;
