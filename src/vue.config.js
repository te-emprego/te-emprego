import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'vuetify/dist/vuetify.min.css';

import Vue from 'vue';
import Vuetify from 'vuetify';
import Http from 'Core/Http';
import Store from 'Core/Store';
import Router from 'Core/Router';
import Helpers from 'Core/Services/Helpers';
import VueMask from 'v-mask';
import vClickOutside from 'v-click-outside';
import Affix from 'vue-affix';

Vue.prototype.$http = Http;
Vue.prototype.$store = Store;
Vue.prototype.$helpers = Helpers;

Vue.use(Affix);
Vue.use(Vuetify, {
  theme: {
    primary: '#673ab7',
  },
});

Vue.config.productionTip = false;

Vue.use(vClickOutside);
Vue.use(VueMask);

export default Vue;

export { Router };
