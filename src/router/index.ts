import Vue from 'vue';
import Router from 'vue-router';
import about from './about';

Vue.use(Router);

export default new Router({
  routes: [
    ...about
  ],
});
