import { useCallback, useContext, useMemo } from 'react';

import { context } from '../Body';

import { Position } from '../types';

const positionIntoArea = (
  position: Position,
  startPosition: Position,
  finishPosition: Position,
): boolean => position.row >= startPosition.row
  && position.row <= finishPosition.row
  && position.cell >= startPosition.cell
  && position.cell <= finishPosition.cell;

const useSelected = (position: Position) => {
  const {
    startPosition,
    finishPosition,
    setStartPosition,
    setFinishPosition,
    isSelected: selectInProgress,
  } = useContext(context);

  const isSelected = useMemo(
    () => startPosition
      && finishPosition
      && positionIntoArea(position, startPosition, finishPosition),
    [startPosition, finishPosition, position],
  );

  const handleStartSelected = useCallback(
    () => setStartPosition(position),
    [setStartPosition, position],
  );

  const handleFinishSelected = useCallback(
    () => setFinishPosition(position),
    [setFinishPosition, position],
  );

  return {
    isSelected,
    onStartSelect: handleStartSelected,
    onFinishSelect: handleFinishSelected,
    selectInProgress,
  };
};

export default useSelected;
