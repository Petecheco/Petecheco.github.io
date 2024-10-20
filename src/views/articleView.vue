<template>
    <div class="mainContainer">
        <div class="mainLargeText">
            <Icon class="bigTitleIcon"><Book /></Icon>
            <div class="mainText">My Articles</div>
        </div>
        <div class="thingsContainer">
            <n-list hoverable clickable style="border-radius: 10px;">
                <template #header>
                    <div class="mainSmallText">
                        <div class="mainText">You can see most of my articles here</div>
                    </div>
                </template>
                <n-list-item v-for="article in articleList" :key="article.title">
                    <template #prefix>
                        <n-image
                            class="articleCover"
                            width="100"
                            :src="article.cover"
                        />
                    </template>
                    <n-thing :title="article.title" content-style="margin-top: 10px;">
                        <template #description>
                            <n-space vertical>
                                {{ article.authors }}
                                <n-space size="small" style="margin-top: 4px">
                                    <n-tag v-for="tag in article.tags" :bordered="false" type="info" size="small">
                                    {{ tag }}
                                    </n-tag>
                                </n-space>
                            </n-space>
                        </template>
                        <div class="longAbs">
                        {{ article.abstract }}
                        </div>
                        <template #footer>
                            <n-space align="center" justify="space-between">
                                <div class="publishDate">
                                    Published on 
                                    <span class="bold">{{ article.journal }}</span>
                                     in <span class="bold">{{ article.date }}</span> 
                                     <br><span class="link">{{ article.link }}</span> 
                                </div>
                                <n-button v-show="article.link != ''" @click="openWindow(article.link)" size="small">
                                    <template #icon>
                                        <n-icon>
                                            <ArrowForwardCircle />
                                        </n-icon>
                                    </template>
                                Open in New Tab
                                </n-button>
                            </n-space>
                        </template>
                    </n-thing>
                </n-list-item>
            </n-list>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Book, ArrowForwardCircle } from '@vicons/ionicons5'
import { Icon } from '@vicons/utils';
import { NThing, NTag, NImage, NButton, NSpace, NIcon, NList, NListItem } from 'naive-ui';
import sensorsCover from '@/assets/articleCovers/sensors-23-08060-g002.png'
import jsenCover from '@/assets/articleCovers/jsen-gagraphic-3345400.jpg'
import clrGAN from '@/assets/articleCovers/clr-gan.jpg'

const articleList = ref([
    {
        title: 'CLR-GAN: Improving GANs Stability and Quality via Consistent Latent Representation and Reconstruction',
        authors: 'Shengke Sun, Ziqian Luan, Zhanshan Zhao, Shijie Luo and Shuzhen Han',
        journal: 'European Conference on Computer Vision(ECCV)',
        date: '2024',
        link: '',
        cover: clrGAN,
        abstract: '',
        tags: ['Generative Adversarial Networks', 'Image Generation','Latent Space Consistency']
    },
    {
        title: 'Deep Residual Multiscale Convolutional Neura Network With Attention Mechanism for Bearing Fault Diagnosis Under Strong Noise Environment',
        authors: 'Shuzhen Han, Shengke Sun, Zhanshan Zhao, Ziqian Luan and Pingjuan Niu',
        journal: 'IEEE Sensors',
        date: '2024',
        link: 'https://ieeexplore.ieee.org/document/10418870/',
        cover: jsenCover,
        abstract:'',
        tags: ['Fault Diagnosis', 'Denoising', 'Attention Mechanism']
    },
    {
        title: 'A Novel Deep Convolutional Neural Network Combining Global Feature Extraction and Detailed Feature Extraction for Bearing Compound Fault Diagnosis',
        authors: 'Shuzhen Han, Pingjuan Niu*, Shijie Luo, Yitong Li, Dong Zhen, Guojin Feng and Shengke Sun',
        journal: 'Sensors',
        date: '2023',
        link: 'https://www.mdpi.com/1424-8220/23/19/8060',
        cover: sensorsCover,
        abstract: '',
        tags: ['Fault Diagnosis', 'Deep Learning', 'Global Feature Extraction']
    },
    
])

const emit = defineEmits(['currentView'])
emit('currentView', 'article')

function openWindow(url: string) {
    if(url != '') window.open(url)
}
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

.link {
    font-weight: lighter;
    font-size: 0.8rem;
    color: rgb(182, 182, 182);
}

.bold {
    font-weight: bolder;
}

.longAbs {
    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    line-clamp: 3;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
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

.articleCover {
    display: block;
}

@media screen and (max-width: 450px) {
    .mainContainer {
        width: 100vw;
        margin-top: 100px;
        box-sizing: border-box;
        padding-right: 20px;
    }

    .articleCover {
        display: none;
    }
}
</style>