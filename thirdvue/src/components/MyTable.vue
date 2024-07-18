<template>
    <div>
        <table>
            <thead>
            <tr>
                <slot name="head"></slot>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in list" :key="index">
                <slot name="body" :item="item" :index="index"></slot>
            </tr>
            </tbody>
            <tfoot></tfoot>
        </table>
    </div>
</template>

<script>
// import MyTag from "@/components/MyTag.vue";

export default {
    name: "MyTable",
    components: {
        // MyTag,
    },
    data() {
        return {
            content: '被子'
        }
    },
    props: {
        list: Array
    }
}
</script>

<style scoped>

</style>
