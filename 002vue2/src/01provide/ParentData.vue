<template>
    <div>
        {{ for1 }} --
        {{ arr }}--
        {{ test }}
    </div>
</template>

<script>
export default {
   inject:['for1','arr',"test"],
}
</script>