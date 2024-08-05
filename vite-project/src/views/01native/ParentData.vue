<script setup lang="ts">
import { ref } from 'vue'
// import Child from './Child.vue';
// import TestData from './TestData.vue';
// import TestData2 from './TestData2.vue';
// import TestData3 from './TestData3.vue';
import TestData4 from './TestData4.vue';

const countModel = ref('1000')

</script>

<template>
  <!-- <h1>{{ count }}</h1>
  <Child @click.native="add" :userName="userName" @close="closeFun"/> -->
  <TestData4 v-model="countModel"/>
  <!-- <TestData/> -->

</template>




<style scoped> 
.read-the-docs {
  color: #888;
}
</style>
