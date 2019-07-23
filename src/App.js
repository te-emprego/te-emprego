import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Main from '@pages/main';
import Login from '@pages/login';
import Welcome from '@pages/welcome';

import '@store/config/reactotron';
import store from '@store';

import GlobalStyle from '@/globalStyles/global';
import { MainWrapper } from '@/globalStyles/MainWrapper';

const App = () => (
  <Provider store={store}>
    <MainWrapper>
      <GlobalStyle />
      <BrowserRouter>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={700}
                classNames="alert"
              >
                <Switch location={location}>
                  <Route path="/" component={Main} exact />
                  <Route path="/login" component={Login} />
                  <Route path="/welcome" component={Welcome} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </BrowserRouter>
    </MainWrapper>
  </Provider>
);

export default App;
