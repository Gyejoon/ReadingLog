import { useState, useEffect } from 'react';

export default function useCloseTransition(
  visible: boolean,
  transitionTime: number,
) {
  const [closed, setClosed] = useState(true);

  useEffect(() => {
    let timeoutId: number | null = null;
    if (visible) {
      setClosed(false);
    } else {
      timeoutId = setTimeout(() => {
        setClosed(true);
      }, transitionTime);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [visible, transitionTime]);

  return {
    closed,
  };
}
