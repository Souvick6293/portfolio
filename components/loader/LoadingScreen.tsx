import Image from 'next/image';
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <Image src="/assets/loader.gif" alt="Loading..." width={1000} height={1000}/>
    </div>
  );
};

export default LoadingScreen;
