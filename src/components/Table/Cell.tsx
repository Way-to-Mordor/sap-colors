import React, { useCallback } from 'react';

import useRow from './hooks/use-row';
import useSelected from './hooks/use-selected';

import { Cell as CellType } from './types';

const Cell: CellType = ({ children, index }) => {
  const { index: rowIndex } = useRow();

  const {
    isSelected,
    onStartSelect,
    onFinishSelect,
    selectInProgress,
  } = useSelected({ row: rowIndex, cell: index });

  const handleFinishSelect = useCallback(
    () => {
      if (selectInProgress) {
        onFinishSelect();
      }
    },
    [selectInProgress, onFinishSelect],
  );

  return (
    <td
      style={{ backgroundColor: isSelected ? 'white' : 'black' }}
      onMouseDown={onStartSelect}
      onMouseEnter={handleFinishSelect}
    >
      {children}
    </td>
  );
};

export default Cell;
