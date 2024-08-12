import { ToastContainer } from 'react-toastify';
import { ModalContainer } from 'entities/modal';

import { withPersistor, withProviders, withRouter, withStore, withTheme, WithICConnect, WithAchievementProvider } from './providers';
import { RouteManager } from './router';

import 'react-toastify/dist/ReactToastify.css';
import './appStyles/index.scss';

const App = () => {
  return (
    <>
      <RouteManager />
      <ToastContainer autoClose={4000} hideProgressBar position="bottom-right" closeButton />
      <ModalContainer />
    </>
  );
};

export default withProviders(withRouter, withTheme, withStore, withPersistor, WithICConnect, WithAchievementProvider)(App);
