<template>
    <div id="app">
        <cart-item v-for="(item, index) in list" :key="item.id" :item="item"></cart-item>
        <hr>
        <div>共{{totalCount}}件商品，合计{{ totalPrice }}元</div>
    </div>
</template>

<script>
import CartItem from "@/components/CartItem.vue";
import {mapGetters, mapMutations, mapState} from "vuex";

export default {
    name: 'App',
    components: {
        CartItem
    },
    created() {
        this.$store.dispatch("cart/getList");
    },
    computed: {
        ...mapState('cart', ['list']),
        ...mapGetters('cart', ['totalPrice', 'totalCount'])
    },
    methods: {
        ...mapMutations('cart', ['getPrice']),
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
