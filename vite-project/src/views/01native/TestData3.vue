<template>
    <div>{{ myRef }}</div>
     <button @click="add">+++</button>
 </template>
 
 <script lang="ts" setup>
 import { isRef } from 'vue';
 import { useCustomRef } from './useDemo';
 
 const myRef = useCustomRef('Hello')  
 
 console.log(isRef(myRef),myRef)
 
 function add(){
     myRef.value=50
     console.log(isRef(myRef),myRef)
 
 }
 
 
 
 </script>