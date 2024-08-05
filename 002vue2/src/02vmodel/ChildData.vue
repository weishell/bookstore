<template>
    <div>
        child - {{ value }}
        <button @click="add">child add</button>
        <!-- <input type="text" :value="value" @input="onInput"> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
          
        }
    },
    props:['value'],
    methods: {
      add(){
        alert()
        this.$emit("input",this.value+1)
      }
    },
    components:{
       
    }
}
</script>