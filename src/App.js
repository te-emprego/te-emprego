import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Main from '@pages/main';
import Login from '@pages/login';

import '@store/config/reactotron';
import store from '@store';

import GlobalStyle from '@/globalStyles/global';

const App = () => (
  <Provider store={store}>
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Route path="/" component={Main} exact />
        <Route path="/login" component={Login} />
      </BrowserRouter>
    </>
  </Provider>
);

export default App;
