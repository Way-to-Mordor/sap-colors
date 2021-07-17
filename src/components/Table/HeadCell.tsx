import React from 'react';

import { HeadCell as HeadCellType } from './types';

const HeadCell: HeadCellType = ({ children }) => (
  <th>
    {children}
  </th>
);

export default HeadCell;
