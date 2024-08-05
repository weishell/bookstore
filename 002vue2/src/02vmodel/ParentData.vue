<template>
    <div>
        <ChildData v-model="myapp" ref="zz"/>
        <button @click="add">+++</button>
        {{ myapp }}
    </div>
</template>

<script>
import ChildData from './ChildData.vue'
export default {
    data() {
        return {
          myapp:0
        }
    },
    mounted(){
       
    },
    created(){
        this.$refs.zz.add()
        console.log(this.$refs.zz)
    },
    methods: {
       add(){
        this.myapp++
       }
    },
    components:{
        ChildData 
    }
}
</script>