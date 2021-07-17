import { useContext } from 'react';

import { context } from '../Row';

const useRow = (): { index: number } => useContext(context);

export default useRow;
