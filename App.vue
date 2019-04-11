<template lang="html">
  <div class="container is-fluid">
    <!-- <display-list></display-list> -->
  <router-view></router-view>
  </div>
</template>

<script>
import display from './components/index.vue'

export default{
    data(){
      return{

      }
    },
    components: {
      'display-list': display
    }
}
</script>

<style lang="css" scoped>
.container {
  margin: 60px;
  padding: 10px;
}
</style>
