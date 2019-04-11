import Vue from 'vue';
import Vuex from 'vuex';

import cities from './components/store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cities
  }
});
