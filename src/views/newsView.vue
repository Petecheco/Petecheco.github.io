<template>
    <div class="mainContainer">
        <div class="mainLargeText"><Icon class="bigTitleIcon"><Newspaper /></Icon><div class="mainText">News</div></div>
        <div class="thingsContainer">
            <n-list hoverable clickable style="border-radius: 10px;">
                <template #header>
                    <div class="mainSmallText">
                        <div class="mainText">My latest news</div>
                    </div>
                </template>
                <n-list-item v-for="news in newsList" :key="news.title">
                    <NSpace justify="space-between" align="center">
                        <div v-html="news.title" />
                        <div>{{ news.time }}</div>
                    </NSpace>
                </n-list-item>
            </n-list>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Newspaper } from '@vicons/ionicons5'
import { Icon } from '@vicons/utils';
import { NList, NListItem, NSpace } from 'naive-ui';

const newsList = ref([
    {   title: `I started writing <a class="urlLink" href="/blog/blog" target="_blank">blogs</a> about tricks and findings that I encounter during my research. Welcome leave any comment!`,
        time: '2026/2/1'
    },
    {   title: `I will be joining <a class="urlLink" href="https://galaxea-ai.com/" target="_blank">Galaxea AI</a> as a research intern.`,
        time: '2024/11/28'
    },
    {   title: `I will be joining Nanjing University of Science and Technology(NJUST) 
                to pursue my bachelor\'s degree under the supervision of 
                <a class="urlLink" href="https://gcatnjust.github.io/ChenGong/index.html" target="_blank">Prof. Chen Gong</a>.`,
        time: '2024/9/28'
    },
    {
        title: 'I was invited to serve as a reviewer for ICLR2025!',
        time: '2024/9/17'
    },
    {
        title: 'My paper "CLR-GAN: Improving GANs Stability and Quality via Consistent Latent Representation and Reconstruction" was accepted by ECCV2024!',
        time: '2024/7/4'
    },
])

const emit = defineEmits(['currentView'])
emit('currentView', 'news')
</script>

<style lang="less" scoped>
@keyframes textIn {
    0% {
        transform: translateX(50px);
    }
    20% {
        transform: translateX(50px);
    }
    100% {
        transform: translateX(0px);
    }
}

.mainText {
    animation: textIn .5s;
}

.mainContainer {
    padding: 20px;
    box-sizing: border-box;
    max-width: 1200px;
    min-width: 350px;
    width: 75vw;
}

.mainLargeText {
    font-size: 2.5rem;
    font-weight: bolder;
    margin: -5px;
    display: flex;
}

.mainSmallText {
    font-size: 1.2rem;
    font-weight: bolder;
    display: flex;
}

.bigTitleIcon {
    font-size: 5rem;
    opacity: .1;
    position: relative;
    margin-right: -60px;
    margin-top: -20px;
}

.thingsContainer {
    width: 100%;
    margin-top: 20px;
}

@media screen and (max-width: 450px) {
    .mainContainer {
        width: 100vw;
        margin-top: 100px;
        padding-right: 20px;
        box-sizing: border-box;
    }
}
</style>