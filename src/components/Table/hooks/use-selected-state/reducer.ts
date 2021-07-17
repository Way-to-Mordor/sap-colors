import ActionType, { Action } from './actions';
import { Positions } from './types';

interface Reducer extends Positions{
  isSelected: boolean;
}

export const initialState: Reducer = {
  startPosition: null,
  finishPosition: null,
  isSelected: false,
};

export default (state: Reducer, action: Action): Reducer => {
  switch (action.type) {
    case ActionType.SELECT_START_POSITION:
      return action.payload ? {
        ...state,
        startPosition: action.payload,
        finishPosition: action.payload,
        isSelected: true,
      } : state;
    case ActionType.SELECT_FINISH_POSITION:
      return state.startPosition && action.payload ? {
        ...state,
        finishPosition: action.payload,
      } : state;
    case ActionType.FINISH_SELECT:
      return {
        ...state,
        isSelected: false,
      };
    default:
      return state;
  }
};
