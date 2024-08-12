import { modalModel } from 'entities/modal';
import { marketplaceModel } from 'entities/marketplace';
import { uiReducer } from 'shared';

export default {
  ui: uiReducer,
  modal: modalModel.reducer,
  marketplace: marketplaceModel.reducer,
};
