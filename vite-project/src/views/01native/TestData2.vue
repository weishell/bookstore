<template>
   <div>--{{ state?.count ? state.count : 'xxx'}}--hhh</div>
   <button @click="change">+++</button>
</template>

<script lang="ts" setup>
import { shallowRef, triggerRef} from 'vue';

const state = shallowRef({ count: 1 })

// 不会触发更改
state.value.count = 2
state.value = { count: 12 }
setTimeout(() => {
    // state.value = { count: 16 } //① 会更改
    state.value.count = 20 //有①会更改成20，没有不会变动
}, 1000);
function change (){
    state.value.count = 2000 // 不会触发
    // triggerRef(state)  //增加这行会更新成2000
    // state.value = { count: 1600 }// 会触发
}

state.value.count = 25 //初始化
</script>