// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'vue-easytable/libs/themes-base/index.css';
// import './style/normalize.css';
import '../../style/normalize.css';
import 'iview/dist/styles/iview.css';
import '../../style/style.css';
// import './style/style.css';

import Vue from 'vue';
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';
// import Raven from 'raven-js';
// import RavenVue from 'raven-js/plugins/vue';
import iView from 'iview';
import App from './index.vue';
import router from './router';
import store from './store';
import ContainerHeader from '../../components/main/containerHeader.vue';
if (process.env.VUE_APP_BUILD === 'production-formal') {
  Sentry.init({
    dsn: 'https://04f982c0149c4527b5bab989b99e6a0e@api-sentry.huya.com/xx', // todo 替换你的sentry id xx
    integrations: [
      new Integrations.Vue({
        Vue,
        attachProps: true
      })
    ]
  });
}

Vue.config.productionTip = false;

Vue.component('c-container-header', ContainerHeader);
Vue.use(router);
Vue.use(iView);

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   store,
//   components: { App },
//   template: '<App/>'
// });
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
