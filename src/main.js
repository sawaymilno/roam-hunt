import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Search from './components/Search';
import AppList from './components/AppList';
import MapView from './components/MapView';
import SoloHunt from './components/SoloHunt';
import store from './store';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      component: Search
    },
    {
      path: '/mapview',
      component: MapView
    },
    {
      path: '/listview',
      component: AppList
    },
    {
      path: `/solohunt`,
      component: SoloHunt
    }
  ]
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');