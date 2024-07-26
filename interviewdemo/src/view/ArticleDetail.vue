<template>
    <div class="container">
        <div class="top-banner">
            <img @click="$router.back()" src="../assets/logo.png" alt="" style="width: 32px; height: 32px;"/>
            <div style="width:100%;align-self: center;text-align: center">面经分享</div>
        </div>
        <div class="content">
            <div style="font-size: 36px">
                {{ this.item.stem }}
            </div>
            <div>{{ item.createdAt }} | {{ item.views }}阅读量| {{ item.likeCount }}点赞数</div>
            <div class="avatar-root">
                <img style="height: 32px;width: 32px" :src="this.item.creatorAvatar" alt="头像"/>
                <div style="align-self: center;margin-left: 12px">{{ item.creatorName }}</div>
            </div>
            <div style="text-align: start">{{ item.content }}</div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'ArticleDetail',
    data() {
        return {
            item: {
                id: '',
                questionNo: '',
                stem: '',
                content: '',
                subjectName: '',
                questionType: 0,
                difficulty: 0,
                views: '',
                likeCount: '',
                questionBankType: 0,
                creatorName: '',
                creatorAvatar: '',
                createdAt: '',
                likeFlag: 0,
            }
        }
    },
    async created() {
        const res = await axios.get(`https://mock.boxuegu.com/mock/3083/articles/${this.$route.params.id}`)
        this.item = res.data.result
        console.log(this.item)
    }
}
</script>

<style scoped>
.container {
    width: auto;
    height: 100%;
    background: #FAFAFA;
}

.top-banner {
    width: 100%;
    height: 20%;
    background: deepskyblue;
    display: flex;
    flex-direction: row;
}

.content {
    width: 100%;
    height: 85%;
    background: antiquewhite;
}

.avatar-root {
    display: flex;
    flex-direction: row;
}
</style>
