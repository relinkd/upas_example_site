import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

export const useWindowState = () => {
  const [windowState, setWindowState] = useState({ width: 0, height: 0 });
  const [windowStateCached] = useDebounce(windowState, 300);

  useEffect(() => {
    const handleResize = () =>
      setWindowState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowStateCached;
};
