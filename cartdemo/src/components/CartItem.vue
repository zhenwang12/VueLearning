<script>
export default {
    name: "cart-item",
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    methods: {
        changeCount(type) {
            // if (this.item.count === 0) {
            //     document.getElementById('minus').disabled = true;
            // } else {
            //     document.getElementById('minus').disabled = false;
            // }
            const count = this.item.count + type
            this.$store.commit('cart/updateItem', {
                count: count,
                id: this.item.id
            })
        }
    }
}
</script>

<template>
    <div class="root">
        <img :src="item.image" style="height:128px; width: 128px;margin-right: 20px">
        <div style="display: flex;width:100%;flex-direction: column;">
            <div class="title">{{ item.name }}</div>
            <div class="price-root">
                <div class="price-text">{{ item.price }}</div>
                <button id="minus" :disabled="this.item.count===0" class="button" @click="changeCount(-1)">-</button>
                <div class="count">{{ item.count }}</div>
                <button class="button" @click="changeCount(1)">+</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.root {
    display: flex;
    flex-direction: row;
    margin: 12px 10px 12px 10px;
}

.title {
    text-align: start;
    font-size: 20px;
    font-weight: bold;
    flex: 1 0 auto;
}

.price-root {
    display: flex;
    width: 100%;
    flex-direction: row;
    flex: 0 1 auto;
}

.price-text {
    width: 100%;
    text-align: start;
}

.button {
    margin: 0 10px;
}

.count {
    text-align: center;
}
</style>
