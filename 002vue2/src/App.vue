<template>
  <div id="app">
    <!-- <ProvideData/> -->
    <ParentData/>
  </div>
</template>

<script>
// import ProvideData from '../src/01provide/ProvideData.vue'
// import ParentData from '../src/02vmodel/ParentData.vue'
import ParentData from '../src/03attrs/ParentData.vue'

export default {
  name: 'App',
  // mixins:[toggle],
  data(){
    return {
    
    }
  },
  components: {
    // ProvideData,
    ParentData
  },
  mounted(){
   
  },


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
