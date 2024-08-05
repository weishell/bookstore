import { customRef, ref } from 'vue'  
export function useCustomRef(initialValue:any) {  
    const state = ref(initialValue)  
    const customRef1 = customRef((track, trigger) => {  
      // 当第一次访问get方法时，运行这个副作用  
      let firstTime = true  
      return {  
        get() {  
          track() // 告诉Vue这个依赖项依赖于这个Ref  
          if (firstTime) {  
            console.log('This is the first time accessing the value!')  
            firstTime = false  
            return 'something'
          }  
          return state.value  
        },  
        set(newValue) {  
          state.value = newValue  
          trigger() // 告诉Vue这个Ref的值已经改变，需要更新所有依赖项  
        }  
      }  
    })  
    return customRef1
  }  
    