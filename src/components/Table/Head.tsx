import React from 'react';

import HeadCell from './HeadCell';

import { Head as HeadType } from './types';

const Head: HeadType = ({ children }) => (
  <thead>
    {children}
  </thead>
);

Head.Cell = HeadCell;

export default Head;
