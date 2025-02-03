import { useState, useEffect, useRef, RefObject } from 'react';

const useClickOutsideToggle = (callback: () => void): { expanded: boolean; setExpanded: (value: boolean) => void; ref: RefObject<HTMLDivElement> } => {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback]);

  return { expanded, setExpanded, ref };
};

export default useClickOutsideToggle;
