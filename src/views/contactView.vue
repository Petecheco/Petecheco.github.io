<template>
    <div class="mainContainer">
        <div class="mainLargeText"><Icon class="bigTitleIcon"><Call /></Icon><div class="mainText">Contact Me</div></div>
        <div class="mainContent">
            <n-row>
                <n-col style="margin-top: 10px;" v-for="contact in contactList" :key="contact.label" :span="12">
                    <n-statistic @click="openWindow(contact.link)" class="nstat" :label="contact.label">
                        {{ contact.value }}
                    </n-statistic>
                </n-col>
            </n-row>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Call } from '@vicons/ionicons5'
import { Icon } from '@vicons/utils';
import { NRow, NCol, NIcon, NStatistic } from 'naive-ui';

function openWindow(url: string) {
    if (url != '') {
        window.open(url)
    }
}

const contactList = ref([
    {
        label: 'Google Scholar',
        value: 'Shengke Sun',
        link: 'https://scholar.google.com/citations?user=U4hK6wMAAAAJ&hl=zh-TW'
    },
    {
        label: 'ORCID',
        value: 'Shengke Sun',
        link: 'https://orcid.org/0009-0006-6939-9226'
    },
    {
        label: 'Email (prefered)',
        value: 'sunshengke@tiangong.edu.cn',
        link: 'mailto:sunshengke@tiangong.edu.cn'
    },
    {
        label: 'QQ',
        value: '2055490018',
        link: ''
    },
    {
        label: 'WeChat',
        value: 'molewars0145gg',
        link: ''
    },
])

const emit = defineEmits(['currentView'])
emit('currentView', 'contact')
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

.nstat {
    word-break: break-all; 
    cursor: pointer;
    padding: 5px;
    border-radius: 5px;
    transition-duration: .2s;
}

.nstat:hover {
    background-color: rgba(255, 255, 255, 0.1)
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

.bigTitleIcon {
    font-size: 5rem;
    opacity: .1;
    position: relative;
    margin-right: -60px;
    margin-top: -20px;
}

.mainContent {
    width: 100%;
    margin-top: 10px;
    padding-left: 10px;
}

@media screen and (max-width: 450px) {
    .mainContainer {
        width: 100vw;
        margin-top: 100px;
        box-sizing: border-box;
        padding-right: 20px;
    }
}
</style>