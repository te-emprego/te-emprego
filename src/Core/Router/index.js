import Vue from 'vue';
import { Http, App } from 'Config';
import Router from 'vue-router';
import routes from './experimental';

Vue.use(Router);

const router = new Router({
  ...Http,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
    ? `${to.meta.title} - ${App.title}`
    : App.title;
  next();
});

export default router;
