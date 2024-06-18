<template>
    <div class="hello">
        <h1 v-show="show" ref="topMsg">{{ msg }}</h1>
        <p>
            For a guide and recipes on how to configure / customize this project,<br>
            check out the
            <a href="#" rel="noopener" @click="showHide">vue-cli documentation</a>.
        </p>
        <input placeholder="shuru" ref="inp" v-mingling2>
        <h3>Installed CLI Plugins</h3>
        <ul>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank"
                   rel="noopener">babel</a></li>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank"
                   rel="noopener">eslint</a></li>
        </ul>
        <h3 v-color="red">Essential Links</h3>
        <ul>
            <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
            <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
            <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
        </ul>
        <h3 v-color="green">Ecosystem</h3>
        <ul>
            <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
            <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
            <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank"
                   rel="noopener">vue-devtools</a></li>
            <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            red: 'red',
            green: 'green'
        }
    },
    props: {
        msg: String,
        show: Boolean,
    },
    methods: {
        showHide() {
            //固定update: + 属性值
            this.$emit('update:show', true)
        }
    },
    mounted() {
        console.log(this.$refs.topMsg)
    },
//局部注册指令 指令名：配置项
    directives: {
        mingling2: {
            inserted(el) {
                el.focus()
            }
        },
        color: {
            //inserted 元素被插入到页面时触发
            inserted(el, binding) {
                el.style.color = binding.value
            },
            //updated 值修改时触发
            update(el, binding) {
                el.style.color = binding.value
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
