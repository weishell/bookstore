<template>  
    <div>  
      <ChildData class="k f" some-prop="value" />  
    </div>  
  </template>  
    
  <script>  
  import ChildData from './ChildData.vue'  
    
  export default {  
    data() {  
      return {};  
    },  
    components: {  
      ChildData  
    }  
  }  
  </script>  
    
  <style scoped>  
  .k {  
    color: red;  
  }  
  </style>  