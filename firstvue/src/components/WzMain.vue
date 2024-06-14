<script>
export default {
    name: "WzMain",
    props: {
        list: Array
    },
    methods: {
        deleteItem(id) {
            this.$emit('deleteItem', id)
        }
    }
}
</script>

<template>
    <div>
        <ul>
            <li v-for="(item, index) in list" :key="item.id">
                <div>{{ index + 1 }}</div>
                <div>{{ item.name }}</div>
                <div @click="deleteItem(item.id)"><a href="#">删除</a></div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
li {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
}

div {
    margin-left: 10px;
    margin-right: 10px;
}
</style>
