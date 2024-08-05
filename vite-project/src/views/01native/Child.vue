<script setup lang="ts">
import { ref,defineEmits  } from 'vue'
interface Props {
  userName: string
}

const props = defineProps<Props>()
// defineProps<{ msg: string }>()
const emit = defineEmits(['close'])  

function handleClose() {  
  // 使用 emit 发送 'close' 事件  
  emit('close');  
}   

const count = ref(0)
</script>

<template>
    <div>
        11111
        <div>22222{{ count }}----{{ props.userName }}</div>
    </div>
    <div @click="handleClose">3333</div>2
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
