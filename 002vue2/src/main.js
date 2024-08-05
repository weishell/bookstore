import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  methods: {  
    showAlert: function() {  
      alert('Message from root method!');  
      this.$root.$emit('myname')
      console.log(this.$root === this)
      this.$on('kkk',()=>{
        console.log('根组件监听得到kkk')
      })
    }  
  }  
}).$mount('#app')
