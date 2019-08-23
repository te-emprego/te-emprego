import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './Routes';

import '@store/config/reactotron';
import store from '@store';

import GlobalStyle from '@/globalStyles/global';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  </Provider>
);

export default App;
