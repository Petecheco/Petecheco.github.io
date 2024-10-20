<template>
    <div class="mainContainer">
        <div class="mainTitle">
            <n-tooltip trigger="hover">
                <template #trigger>
                    <n-avatar
                        @click="router.push({name: 'contact'})"
                        style="cursor: pointer;"
                        :size="184"
                        :src="AvatarImage"
                        object-fit="contain"
                    />
                </template>
                Click to Contact Me!
            </n-tooltip>
            <div class="mainTextContainer">
                <div class="mainLargeText">Hi, I'm <span class="primaryText">Shengke Sun (孙盛珂)</span></div>
                <div class="mainLargeText">A <span class="primaryText">Computer Vision</span> Researcher</div>
                <div class="mainLargeText">From <span class="primaryText">Tiangong University, China</span></div>
            </div>
        </div>
        <div class="mainContent">
            <div class="contentTitle"><Icon><ChevronForward /></Icon>Keywords</div>
            <n-space>
                <n-tag round :bordered="false" size="large">
                    Computer Vision
                </n-tag>
                <n-tag round :bordered="false" type="success" size="large">
                    Deep Learning
                </n-tag>
                <n-tag round :bordered="false" type="warning" size="large">
                    Image Processing
                </n-tag>
                <n-tag round :bordered="false" type="error" size="large">
                    Generative Models
                </n-tag>
                <n-tag round :bordered="false" type="info" size="large">
                    Self-Supervised Learning
                </n-tag>
            </n-space>
        </div>
        <div class="mainContent">
            <div class="contentTitle"><Icon><ChevronForward /></Icon>Introduction</div>
            <n-space>
            <div class="contentText">I am currently an undergraduate student in the Department of Software Engineer 
                at Tiangong University, Tianjin, China. I'm currently supervised by 
                <a class="urlLink" href="https://gcatnjust.github.io/ChenGong/index.html" target="_blank">Prof. Zhanshan Zhao</a>. 
                I am a beginner researcher in deep learning 
                and have embarked on this path due to my passion for Artificial Intelligence. 
                I believe that the fundamental purpose of AI is to help human society progress 
                and improve the productivity for everyone. I hope that my research can contribute 
                to this ultimate goal!
            </div>            
            </n-space>
        </div>
    </div>
</template>

<script setup lang="ts">
import { NSpace, NAvatar, NTag, NTooltip } from 'naive-ui';
import AvatarImage from '@/assets/avatar.png'
import { ChevronForward } from '@vicons/ionicons5'
import { Icon } from '@vicons/utils';
import router from '@/router';


const emit = defineEmits(['currentView'])
emit('currentView', 'main')
</script>

<style lang="less" scoped>
@keyframes showText {
    0% {
        transform: scale(0.8) translateX(-100px);
        opacity: 0;
    }
    20% {
        transform: scale(0.8) translateX(-100px);
        opacity: 0;
    }
    100% {
        transform: scale(1) translateX(0px);
        opacity: 1;
    }
}

@keyframes showTextSmall {
    0% {
        transform: scale(0.8) translateX(0px);
        opacity: 0;
    }
    20% {
        transform: scale(0.8) translateX(0px);
        opacity: 0;
    }
    100% {
        transform: scale(1) translateX(0px);
        opacity: 1;
    }
}

.mainLargeText {
    font-size: 2.5rem;
    font-weight: bolder;
}

.mainContainer {
    padding: 20px;
}

.mainContent {
    margin-top: 20px;
}

.contentText {
    font-size: 1.2rem;
    text-align: justify;
    padding-right: 20px;
    width: calc(100% - 20px);
}

.contentTitle {
    font-size: 2rem;
    font-weight: bolder;
    margin-bottom: 10px;
    display: flex;
    justify-content: start;
    align-items: center;
}

.contentTitle .xicon {
    transform: translateY(-2px);
    color: #e2a963;
}

.mainTextContainer {
    animation: showText 1s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding-left: 20px;
    margin-top: 20px
}

.mainTitle {
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
}

@media screen and (max-width: 580px) {
    .mainLargeText {
        font-size: 2.0rem;
    }
}

@media screen and (max-width: 450px) {
    .mainLargeText {
        font-size: 2rem;
        text-align: center;
    }

    .mainTitle {
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;
    }

    .mainTextContainer {
        animation: showTextSmall 1s;
        align-items: center;
        padding-left: 0px;
    }

    .contentText {
        width: 100%;
    }
}
</style>