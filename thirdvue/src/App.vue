<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <MyTable :list="goods">
            <!-- #+name 表示指定的slot -->
            <template #head>
                <td>编号</td>
                <td>名称</td>
                <td>种类</td>
            </template>

            <template #body="{item, index}">
                <td>{{ index + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>
                    <MyTag v-model="content"></MyTag>
                </td>
            </template>
        </MyTable>
    </div>
</template>

<script>
import MyTable from "@/components/MyTable.vue";
import MyTag from "@/components/MyTag.vue";

export default {
    name: 'App',
    components: {
        MyTag,
        MyTable,
    },
    data() {
        return {
            goods: [
                {id: 1, name: '被子'},
                {id: 2, name: '椅子'},
                {id: 3, name: '凳子'}
            ],
            content: '种类'
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
