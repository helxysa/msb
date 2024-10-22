import React from 'react';
import Image from 'next/image';

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50">
      <div className="flex flex-col items-center">
        <Image
          src="/images/logo-msb.png"
          alt="MSB Logo"
          width={150}
          height={150}
          className="mb-8"
        />
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;