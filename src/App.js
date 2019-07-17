import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from '@pages/main';
import Login from '@pages/login';

import GlobalStyle from '@/globalStyles/global';

const App = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Route path="/" component={Main} exact />
      <Route path="/login" component={Login} />
    </BrowserRouter>
  </>
);

export default App;
