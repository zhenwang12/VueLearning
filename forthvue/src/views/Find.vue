<script>
export default {
    name: "FindIn"
}
</script>

<template>
    <!--动态传参  $route.params.words // words为index.js后面的/:words的参数名-->
    <div>{{$route.params.words}}</div>
</template>

<style scoped>

</style>
