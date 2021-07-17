import React, { useCallback, createContext } from 'react';

import { Body as BodyType, Position, MayBePosition } from './types';

import useBodyListener from './hooks/use-body-listener';
import useSelectedState from './hooks/use-selected-state';

interface SelectedContext {
  startPosition: MayBePosition;
  finishPosition: MayBePosition;
  setStartPosition: (position: Position) => void;
  setFinishPosition: (position: Position) => void;
  isSelected: boolean;
}

export const context = createContext<SelectedContext>({
  startPosition: null,
  finishPosition: null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setStartPosition: (position: Position) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setFinishPosition: (position: Position) => {},
  isSelected: false,
});

const Body: BodyType = ({ children }) => {
  const {
    startPosition,
    finishPosition,
    setStartPosition,
    setFinishPosition,
    finishSelect,
    isSelected,
  } = useSelectedState();

  const handleFinishSelect = useCallback(
    () => {
      if (isSelected) {
        finishSelect();
      }
    },
    [isSelected, finishSelect],
  );

  useBodyListener(
    'mouseup',
    handleFinishSelect,
  );

  return (
    <tbody>
      <context.Provider value={{
        startPosition,
        finishPosition,
        setStartPosition,
        setFinishPosition,
        isSelected,
      }}
      >
        {children}
      </context.Provider>
    </tbody>
  );
};

export default Body;
