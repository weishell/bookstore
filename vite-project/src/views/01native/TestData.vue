<template>
    <p>ref demo {{ageRef}} {{state.name}}</p>
    <button @click="test">test</button>
</template>

<script lang="ts">
import { ref, reactive, defineComponent } from 'vue'

export default defineComponent({
    name: 'Ref',
    setup(props,ctx) {
        console.log(props)
        console.log(ctx)
        const ageRef = ref(20) // 值类型 响应式
        const nameRef = ref('双越')
        console.log(typeof ageRef)
          // ref可以直接用在reactive里
        const state = reactive({
            name: nameRef
        })

        setTimeout(() => {
            console.log('ageRef', ageRef.value)

            ageRef.value = 25 // .value 修改值
            nameRef.value = '双越A'
        }, 1500);
        function test(){
            alert(111)
        }

        return {
            ageRef,
            state,
            test
        }
    }
})
</script>