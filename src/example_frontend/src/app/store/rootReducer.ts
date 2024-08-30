import { modalModel } from 'entities/modal';
import { userModel } from 'entities/user';
import { uiReducer } from 'shared';

export default {
  ui: uiReducer,
  modal: modalModel.reducer,
  user: userModel.reducer,
};
