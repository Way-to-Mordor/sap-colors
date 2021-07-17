import React from 'react';

export type Body = React.FC;
export type Cell = React.FC<{ index: number }>;

export type HeadCell =React.FC;
export interface Head extends React.FC {
  Cell: HeadCell;
}

export type Row = React.FC<{ index: number }>;

export interface Table extends React.FC {
  Body: Body;
  Cell: Cell;
  Head: Head;
  Row: Row;
}

export interface Position {
  row: number;
  cell: number;
}

export type MayBePosition = Position | null;
