import Vue from 'vue';
import Vuex from 'vuex';

var baseServerUrl = '/api';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
       cities: [],
       id: '',
       name: '',
       population: ''
    },
    actions:{
      fetchCities({ commit }){
        fetch(baseServerUrl + '/cities')
          .then(response => response.json())
          .then(result => {
            commit("CITIES_FETCHED", result);
          })
      },
      ADD_CITY(context){
        console.log(context);
        fetch(baseServerUrl + '/cities', {
        body: JSON.stringify({id:context.state.id, name:context.state.name, population:context.state.population}),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }).then(response => response.json())
        .then(result => {
        // context.commit('CITY_ID', )
        context.commit('CITY_NAME', null)
        context.commit('CITY_POPULATION', null)
        context.commit('CITY_ADDED', result)
        console.log(result.length -1)
        console.log('New city added')
      })
      },
      DELETE_CITY({ commit, dispatch }, index) {
        fetch(baseServerUrl +'/cities/' + index, {
          method: 'DELETE'
        }).then(response => response.json())
          .then(result => {
                    console.log('city removed ===>>>> ' + index);
                      commit('CITY_DELETED', index)
                }).then(() => {
                dispatch("fetchCities");
            })
      }
  },
    mutations: {
      CITIES_FETCHED(state, cities) {
        state.cities = cities
      },
      CITY_ADDED(state, cities) {
        state.cities = cities;
      },
      CITY_DELETED(state, index) {
        // state.cities.splice(index, 1)
        const cities = state.cities.filter(city => city.id !== index.id);
        Vue.set(state, 'cities', cities);
      },
      CITY_NAME(state, name) {
        state.name = name
      },
      CITY_POPULATION(state, population) {
        state.population = population
      },
    },
    getters:{
      name: state => {
        return state.name;
      },
      population: state => {
        return state.population;
      },
      getCities: state => {
        return state.cities;
    }
    }


});
