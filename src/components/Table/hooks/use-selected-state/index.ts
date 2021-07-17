import { useCallback, useReducer } from 'react';

import ActionType from './actions';
import { selectPositions } from './selectors';
import reducer, { initialState } from './reducer';
import { MayBePosition, Position } from '../../types';

interface SelectedState {
  startPosition: MayBePosition;
  finishPosition: MayBePosition;
  setStartPosition: (position: Position) => void;
  setFinishPosition: (position: Position) => void;
  finishSelect: () => void;
  isSelected: boolean,
}

const useSelectedState = (): SelectedState => {
  const [{
    startPosition: originalStartPosition,
    finishPosition: originalFinishPosition,
    isSelected,
  }, dispatch] = useReducer(reducer, initialState);
  const {
    startPosition,
    finishPosition,
  } = selectPositions(originalStartPosition, originalFinishPosition);

  const setStartPosition = useCallback(
    (position: Position): void => dispatch({
      type: ActionType.SELECT_START_POSITION,
      payload: position,
    }),
    [dispatch],
  );

  const setFinishPosition = useCallback(
    (position: Position): void => dispatch({
      type: ActionType.SELECT_FINISH_POSITION,
      payload: position,
    }),
    [dispatch],
  );

  const finishSelect = useCallback(
    (): void => dispatch({ type: ActionType.FINISH_SELECT }),
    [],
  );

  return {
    startPosition,
    finishPosition,
    setStartPosition,
    setFinishPosition,
    finishSelect,
    isSelected,
  };
};

export default useSelectedState;
