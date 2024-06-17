<script>
import Bus from "@/utils/EventBus";
export default {
    name: "WzFooter",
    props:{
        total: Number
    },
    methods: {
        clearAll() {
            this.$emit('clearAll')
        }
    },
    created() {
        Bus.$on('fromMain', (msg) => {
            alert(msg + '已收到');
        })
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
