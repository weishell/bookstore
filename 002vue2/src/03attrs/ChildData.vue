<template>  
    <div class="my-button-wrapper">  
      <button v-bind="$attrs">Click me</button>  
      <!-- 注意：通常情况下，$attrs 不应该被绑定到 div 上，除非你有特殊需求 -->  
      <div class="k" v-if="false">333</div> <!-- 这里只是演示，实际上不会显示 -->  

      77777
    </div>  
  </template>  
    
  <script>  
  export default {  
    inheritAttrs: false, // 阻止未声明的属性自动绑定到根元素  
    mounted(){
        console.log(this.$attrs)
    }
  };  

  </script>  
    
  <style scoped>  
  /* ChildData 组件自己的样式 */  
  .my-button-wrapper {  
    /* ... */  
  }  
  </style>