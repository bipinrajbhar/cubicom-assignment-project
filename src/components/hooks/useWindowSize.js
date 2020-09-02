import React, { useState, useEffect } from 'react';

const useWindowSize = (
  initialState = {
    width: undefined,
    height: undefined,
  },
) => {
  const [windowSize, setWindowSize] = useState(initialState);

  const handleWindowResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    handleWindowResize();

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return [windowSize];
};

export default useWindowSize;
