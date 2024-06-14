<script>
export default {
    name: "WzFooter",
    props:{
        total: Number
    },
    methods: {
        clearAll() {
            this.$emit('clearAll')
        }
    }
}
</script>

<template>
    <div>
        <div>合计{{total}}个</div>
        <div @click="clearAll"><a href="#">清除全部</a> </div>
    </div>
</template>

<style scoped>

</style>
