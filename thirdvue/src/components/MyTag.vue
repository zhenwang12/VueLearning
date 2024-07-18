<template>
    <div @dblclick="handleDoubleClick">
        <input v-if="showInput" ref="inp" v-focus
               @keyup.enter="inputContent" @blur="showInput=false"
                :value="value"
        >
        <div v-else>{{ value }}</div>
    </div>
</template>

<script>

export default {
    name: "MyTag",
    data() {
        return {
            showInput: false,
            content: '',
        }
    },
    methods: {
        handleDoubleClick() {
            this.showInput = !this.showInput;
            // this.$nextTick(() => {
            //     this.$refs.inp.focus();
            // })
        },
        inputContent(e) {
            if (e.target.value === '') {
                alert('输入内容')
                return
            }
            this.$emit('input', e.target.value);
            this.showInput = false
        }
    },
    props: {
        value: String
    },
}
</script>

<style scoped>
.mytag {
    width: 50px;
    height: 40px;
    border-color: aquamarine;
    border-width: 1px;
    color: red;
    margin: 0 auto;
}
</style>
