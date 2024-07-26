<script>
export default {
    name: "MinePage",
    created() {
        console.log(this.$route.query.key)
    }
}
</script>

<template>
    <div>{{$route.query.key}}</div>
</template>

<style scoped>

</style>

