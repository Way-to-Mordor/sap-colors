import { useEffect } from 'react';

const useBodyListener = <K extends keyof DocumentEventMap>(
  eventName: K,
  callback: (this: Document, ev: DocumentEventMap[K]) => void,
): void => {
  useEffect(
    () => {
      document.addEventListener(
        eventName,
        callback,
      );

      return () => document.removeEventListener(eventName, callback);
    },
    [callback],
  );
};

export default useBodyListener;
