import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import AnimatedRoutes from '@components/AnimatedWrapper';

import '@store/config/reactotron';
import store from '@store';

import Main from './pages/main';

import GlobalStyle from '@/globalStyles/global';

const App = () => (
  <Provider store={store}>
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Route exact path="/" component={Main} />
        <AnimatedRoutes />
      </BrowserRouter>
    </>
  </Provider>
);

export default App;
