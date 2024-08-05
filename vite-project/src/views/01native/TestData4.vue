<!-- Child.vue -->
<script setup>
import {isRef,defineEmits} from 'vue'
const model = defineModel({ default: 1 })
console.log(isRef(model)) //TRUE
 const emit = defineEmits(['update:modelValue'])
function update() {
    emit("update:modelValue",200)
}
</script>
<template>
  <div>Parent bound v-model is: {{ model }}</div>
  <button @click="update">child-update-model</button>
  <input type="text" v-model="model">
</template>
