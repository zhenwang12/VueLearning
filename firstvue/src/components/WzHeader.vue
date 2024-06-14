<script>
export default {
    name: 'WzHeader',
    //data必须是一个函数
    data() {
        return {
            todoName: '',
        }
    },
    // props: {
    //props校验的完整写法：
    // 'name': {
    //     type: String,
    //     required: true,
    //     //自定义校验
    //     validator(value) {
    //         return value.length > 2;
    //     }
    // },
    // },
    methods: {
        clickItem() {
            this.$emit('changeName', '收到')
        },
        addItem() {
            if (this.todoName.trim() === '') {
                alert('输入任务内容')
                return
            }
            this.$emit('addItem', this.todoName)
            this.todoName = ''
        }
    }
}
</script>

<template>
    <section>
        <div class="header" @click="clickItem">我是记事本</div>
        <div>
            <input @keyup.enter="addItem" type="text" placeholder="输入内容" v-model="todoName">
            <button @click="addItem">添加</button>
        </div>
    </section>
</template>

<style scoped>
.header {
    width: auto;
    height: auto;
    background: aqua;
    margin: 0 auto;
    color: #0a0a0a;
}

input {
    width: 200px;
    height: 30px;
}
</style>

