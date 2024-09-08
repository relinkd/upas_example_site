import { ToastContainer } from 'react-toastify';
import { ModalContainer } from 'entities/modal';

import { withPersistor, withProviders, withRouter, withStore, withTheme, WithICConnect, WithPostMessage, WithReputationProvider } from './providers';
import { RouteManager } from './router';
import { useEffect } from 'react';
import { useShallowSelector } from 'shared';
import { userModel } from 'entities/user';
import { useDispatch } from 'react-redux';
import { WithFeedBackendProvider } from './providers/with-feed-backend';

import 'react-toastify/dist/ReactToastify.css';
import './appStyles/index.scss';

const App = () => {

  const { postMessage } = useShallowSelector(userModel.selectors.getUser)
  const dispatch = useDispatch()

  useEffect(() => {
    if(postMessage?.type === "RETURN_IDENTITY") {
      dispatch(userModel.userActions.updateUserState({
        identity_wallet: postMessage.data
      }))
    }
  }, [postMessage])

  return (
    <>
      <RouteManager />
      <ToastContainer autoClose={4000} hideProgressBar position="bottom-right" closeButton />
      <ModalContainer />
    </>
  );
};

export default withProviders(withRouter, withTheme, withStore, withPersistor, WithPostMessage, WithICConnect, WithReputationProvider, WithFeedBackendProvider)(App);
