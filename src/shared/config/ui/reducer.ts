import { RequestStatus, UIState } from 'shared';

import getUIReducer from './getUIReducer';

const getInitActionTypesRequestStatus = (actionTypesObj: any) => {
  return Object.keys(actionTypesObj).reduce((acc, actionType) => {
    return {
      ...acc,
      [actionType]: RequestStatus.INIT,
    };
  }, {});
};
// TODO: add initial states, check why loading state not tracking
const initialState: UIState = {};

export const uiReducer = getUIReducer(initialState);
