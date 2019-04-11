<template lang="html">
  <div>
    <div class="hero">
      <div v-if="city.id == $route.params.id">
      <p>{{msg}} : {{ $route.params.id }}</p>

      <p class="control">
        <label class="label" for="username">City Name</label>
        <input v-model="city.name" class="input" type="text">
    </p>
      <p class="control">
        <label class="label" for="fullName">City population</label>
        <input v-model="city.population" class="input" type="text">
        </p>
        <button class="button" @click.prevent="save()">Save</button>
        <button class="button" @click="$router.go(-1)">Cancel</button>
      </div>
  </div>
 <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Update-City',
  data(){
    return{
      city: {
        name:null,
        population: null
      },
   msg:'Current City Id',
   msgEdit: ''
    }
  },
  computed: {

 },
  methods: {
    save(){
      let den = this
      let id = den.$route.params.id
      fetch('http://localhost:3000/cities/'+ id, {
        body: JSON.stringify({ name: den.city.name, population: den.city.population }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'PUT'
      })
  .then(function (response) {
    return response.json()
  })
  .then(function (result) {
    console.log('city updated');
    den.$router.go(-1)
    console.log(result)
  })
    }
},
 mounted() {
        let id = this.$route.params.id
        return this.city = this.$store.getters.getCities.find((p) => p.id === id) || {}
    },
}
// </script>

<style lang="css" scoped>

</style>
