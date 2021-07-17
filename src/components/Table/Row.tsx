import React, { createContext } from 'react';

import { Row as RowType } from './types';

export const context = createContext({ index: 0 });

const Row: RowType = ({ children, index }) => (
  <tr>
    <context.Provider value={{ index }}>
      {children}
    </context.Provider>
  </tr>
);

export default Row;
