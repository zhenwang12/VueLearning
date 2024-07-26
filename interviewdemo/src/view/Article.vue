<template>
    <div>
        <div v-for="(item, index) in this.articles" class="item-root" @click="onItemClicked(item)">
            <div class="top-name">
                <img :src="item.creatorAvatar" class="avatar"/>
                <div style="margin-left: 12px">
                    <div class="top-article-name">{{ item.stem }}</div>
                    <div class="top-article-info">{{ item.creatorName }} | {{ item.createdAt }}</div>
                </div>
            </div>
            <div class="middle-articles">
                {{ item.content }}
            </div>
            <div class="bottom-views">
                点赞{{ item.likeCount }} | {{ item.views }}
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
    name: 'Article',
    data() {
        return {
            articles: [{
                id: '',
                questionNo: '',
                stem: '',
                content: '',
                createdAt: '',
                creatorAvatar: '',
                creatorName: '',
                difficulty: 0,
                likeCount: '',
                likeFlag: 0,
                questionBankType: 0,
                questionType: 0,
                subjectName: '',
                views: '',
            }]
        }
    },
    async created() {
        const res = await axios.get('https://mock.boxuegu.com/mock/3083/articles')
        this.articles = res.data.result.rows;
        console.log(res)
    },
    methods: {
        onItemClicked(item) {
            router.push('/detail/' + item.id);
        }
    },
}
</script>

<style scoped>
.item-root {
    width: 100%;
    height: auto;
    padding: 20px 10px;
    border: 1px solid #F0F0F0;
}

.avatar {
    width: 48px;
    height: 48px;
}

.top-name {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
}

.top-article-name {
    text-align: start;
}

.top-article-info {
    text-align: start;
}

.middle-articles {
    text-align: start;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    margin-top: 20px;
    font-size: 18px;
}

.bottom-views {
    text-align: start;
    margin-top: 20px;
    font-size: 14px;
}
</style>
