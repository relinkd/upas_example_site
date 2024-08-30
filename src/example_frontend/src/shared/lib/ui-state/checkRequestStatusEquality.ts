import { RequestStatus } from 'shared/config';

export const checkRequestStatusEquality = (actionTypes: string, requestStatus = RequestStatus.REQUEST) => {
  return requestStatus === actionTypes;
};
