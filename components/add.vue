<template lang="html">
  <div class="">
    <div class="field is-grouped">
      <p class="control">
        <label class="label" for="username">City Name</label>
        <input v-model="cityName" class="input" type="text">
    </p>
      <p class="control">
        <label class="label" for="fullName">City Population</label>
        <input v-model="cityPopulation" class="input" type="text">
        </p>
        <button class="button" @click="addCity()">Add City</button>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name: '',
      population: 0
    }
  },
  methods: {
    addCity(){
      if (this.cityName.length > 0 && this.cityPopulation.length > 0) {
        this.$store.commit('ADD_CITY')
      }else {
        console.log('error somthing went wrong');
      }
    }
  },
  computed: {
    cityName: {
      get() {
        return this.$store.getters.name
      },
      set(value) {
        this.$store.commit("CITY_NAME", value)
      }
    },
    cityPopulation: {
      get() {
        return this.$store.getters.population
      },
      set(value) {
          this.$store.commit("CITY_POPULATION", value)
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
