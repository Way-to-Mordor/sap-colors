import React from 'react';

import { Table as TableType } from './types';

import Body from './Body';
import Cell from './Cell';
import Head from './Head';
import Row from './Row';

const Table: TableType = ({ children }) => (
  <table>
    {children}
  </table>
);

Table.Body = Body;
Table.Cell = Cell;
Table.Head = Head;
Table.Row = Row;

export default Table;
