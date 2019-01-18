import Vue, { Router } from './vue.config';
import App from './App';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: Router,
  components: { App },
  template: '<App/>',
});
