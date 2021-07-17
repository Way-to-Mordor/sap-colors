import { Position } from '../../types';

enum ActionType {
  SELECT_START_POSITION = 'SELECT_START_POSITION',
  SELECT_FINISH_POSITION ='SELECT_FINISH_POSITION',
  FINISH_SELECT = 'FINISH_SELECT',
}

export interface Action {
  type: ActionType,
  payload?: Position,
}

export default ActionType;
