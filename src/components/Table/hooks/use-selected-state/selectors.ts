import { MayBePosition, Position } from '../../types';
import { Positions } from './types';

const selectStartPosition = (startPosition: Position, finishPosition: Position): Position => ({
  row: Math.min(startPosition.row, finishPosition.row),
  cell: Math.min(startPosition.cell, finishPosition.cell),
});

const selectFinishPosition = (startPosition: Position, finishPosition: Position) => ({
  row: Math.max(startPosition.row, finishPosition.row),
  cell: Math.max(startPosition.cell, finishPosition.cell),
});

// eslint-disable-next-line import/prefer-default-export
export const selectPositions = (
  startPosition: MayBePosition,
  finishPosition: MayBePosition,
): Positions => (
  startPosition && finishPosition
    ? {
      startPosition: selectStartPosition(startPosition, finishPosition),
      finishPosition: selectFinishPosition(startPosition, finishPosition),
    } : {
      startPosition: null,
      finishPosition: null,
    }
);
