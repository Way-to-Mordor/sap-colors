import { declareAction, declareAtom, createStore } from '@reatom/core';

export const store = createStore();

export const setColor = declareAction<string>();
export const colorAtom = declareAtom('', (on) => [
  on(setColor, (_, payload) => payload),
]);
