import Vue from 'vue'
var baseServerUrl = 'http://localhost:3000';
export default {
  state: {
     cities: [],
     name: '',
     population: ''
  },
  actions:{

},
  mutations: {
    ADD_CITY(state){
      fetch(baseServerUrl + '/cities', {
      body: JSON.stringify({name: state.name, population: state.population}),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }).then(function (response) {
      return response.json()
    }).then(function (result) {
      console.log(result)
      console.log('New city added')
    })
      state.cities.push({name: state.name, population: state.population});
      state.name = ""
      state.population = ""
    },
    DELETE_CITY(state, index) {
      fetch(baseServerUrl +'/cities/' + index, {
        method: 'DELETE'
      }).then(() => {
                  console.log('city removed ===>>>> ' + index);
                  // state.cities.splice(index, 1)
              })
    },
    CITY_NAME(state, payload) {
      state.name = payload
    },
    CITY_POPULATION(state, payload) {
      state.population = payload
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
      fetch(baseServerUrl + '/cities')
        .then(response => response.json())
        .then(result => {
          state.cities = result
        })
    return state.cities;
  }
  }
};
