import { StateWithUIState } from 'shared';

export const uiSelector = (state: StateWithUIState) => state.ui;
export const uiPropSelector = (propKey: string) => (state: StateWithUIState) => state.ui[propKey];
