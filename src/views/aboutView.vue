<template>
    <div class="mainContainer">
        <div class="mainLargeText"><Icon class="bigTitleIcon"><InformationCircle /></Icon><div class="mainText">About This Site</div></div>
        <div class="mainContent">
            This site is made possible thanks to Vue.js and Naive UI.<br>
            Background images are from Microsoft Bing daily picture.<br>
        </div>
        <div class="mainContent">Front-end Developer: <span class="frontendLink" @click="openWindow('https://github.com/Tyuwwe')">@Tyuwwe</span></div>
        <div class="mainContent">
            <NButton @click="openWindow('https://vuejs.org')" class="byIMG"><NIcon class="nIconImg"><img :src="vueLogo" alt=""></NIcon> Vue.js</NButton>
            <NButton @click="openWindow('https://www.naiveui.com')" class="byIMG"><NIcon class="nIconImg" style="transform: translateY(-2px);"><img :src="naiveLogo" alt=""></NIcon> Naive UI</NButton>
            <NButton @click="openWindow('https://bing.img.run')" class="byIMG"><NIcon class="nIconImg" style="transform: translateY(-8px); margin-right: 43px;"><img :src="bingLogo" alt=""></NIcon> Daily Picture API</NButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import { InformationCircle } from '@vicons/ionicons5'
import { Icon } from '@vicons/utils';
import { NIcon, NButton } from 'naive-ui';
import vueLogo from '@/assets/vuelogo.svg'
import naiveLogo from '@/assets/naivelogo.svg'
import bingLogo from '@/assets/binglogo.svg'

function openWindow(url: string) {
    window.open(url)
}

const emit = defineEmits(['currentView'])
emit('currentView', 'about')
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

.frontendLink {
    margin-left: 10px;
    color: white;
    font-weight: bold;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    text-decoration: none;
    padding-left: 5px;
    padding-right: 5px;
    cursor: pointer;
}

.frontendLink:hover {
    background-color: rgba(255, 255, 255, 0.05);
}

.byIMG {
    margin-right: 10px
}

.nIconImg {
    margin-right: 10px
}

.byIMG:hover {
    background-color: rgba(0, 0, 0, 0.145);
}

.mainContent {
    display: flex;
    font-size: 1.25rem;
    margin-left: 10px;
    margin-top: 10px;
    flex-wrap: wrap;
}

.mainText {
    animation: textIn .5s;
}

.mainContainer {
    padding: 20px;
}

.mainLargeText {
    font-size: 2.5rem;
    font-weight: bolder;
    margin: -5px;
    display: flex;
}

.bigTitleIcon {
    font-size: 5rem;
    opacity: .1;
    position: relative;
    margin-right: -60px;
    margin-top: -20px;
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