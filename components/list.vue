<template lang="html">
  <div class="">
    <add-form></add-form>
    <table class="table is-bordered is-striped">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Population</th>
        <th>Edit</th>
      </tr>

      <tr v-for='(city, index) in cities'>
        <td>{{ city.id }}</td>
        <td>{{ city.name }}</td>
        <td>{{ city.population }}</td>
        <td>
          <div class="buttons are-small">
            <button class="button">
              <router-link :to="{ name: 'edit-city', params: { id: city.id }}">Edit</router-link>
            </button>
            <button class="button"  @click="deleteCity(city.id)">Delete</button>
          </div>
        </td>
      </tr>
      <p v-if="cities.length === 0" class='text-center alert alert-warning'>No data found! Please add some data ...</p>
    </table>
    <!-- <div v-if="$route.params.id">

      <edit-form></edit-form>
    </div> -->

  </div>
</template>

<script>
import add from './add.vue'
import edit from './edit.vue'

export default{
  created() {
   this.$store.dispatch("fetchCities")
 },
    data(){
      return{

      }
    },
    computed: {
      cities() { // hämtar allt from store
             return this.$store.state.cities;
         }
    },
    components: {
      'add-form': add
    },
    methods:{
      deleteCity(index){
          // this.$store.commit('DELETE_CITY', index)
          this.$store.dispatch('DELETE_CITY', index)
          console.log('city removed');
      }
    }
}
</script>

<style lang="css" scoped>
</style>
