<template>
    <div>
        <button @click="changeF">+++</button>
        <ParentData/>
    </div>
</template>

<script>
import ParentData from './ParentData.vue'
export default {
    data() {
        return {
            k:1,
            arr:[1,2,3],
            test:{f:20}
        }
    },
    provide() {
        return {
            for1: this.k,
            arr: this.arr,
            test: this.test,
        }  
    },
    methods: {
        changeF() {
            this.k++//简单类型后代组件不会随之改变
            this.arr = [2] // 直接重新给值不会
            this.test.f = 30 //只修改对应属性后代组件可以改变
        }
    },
    components:{
        ParentData
    }
}
</script>