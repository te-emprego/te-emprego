import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

import Login from '@pages/login';
import Welcome from '@pages/welcome';
import Company from '@pages/company-register';

import { Wrapper } from './styles';

function AnimatedWrapper({ location }) {
  return (
    <Wrapper>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 400, exit: 400 }}
          classNames="dialog"
        >
          <section className="route-section">
            <Switch location={location}>
              <Route path="/login" component={Login} />
              <Route path="/welcome" component={Welcome} />
              <Route path="/company-register" component={Company} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  );
}

AnimatedWrapper.propTypes = {
  location: PropTypes.shape({
    key: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(AnimatedWrapper);
