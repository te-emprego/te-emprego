import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Jobs from '@views/Jobs';
import Login from '@views/Login';

const Container = ({ location }) => (
  <TransitionGroup className="transition-group">
    <CSSTransition
      key={location.key}
      timeout={{ enter: 500, exit: 500 }}
      classNames="route-transition"
    >
      <section className="route-section">
        <Switch location={location}>
          <Route path="/" component={Jobs} exact />
          <Route path="/login" component={Login} exact />
        </Switch>
      </section>
    </CSSTransition>
  </TransitionGroup>
);

Container.propTypes = {
  location: PropTypes.string.isRequired,
};

export default withRouter(Container);
