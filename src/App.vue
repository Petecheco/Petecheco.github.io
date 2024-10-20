<template>
  <div class="backgroundCover">
    <div class="bkgInfo">
      <div class="bkgInfoTitle">
        Image from Microsoft Bing<br>
        Copyright belongs to original author
      </div>
    </div>
  </div>
  <n-config-provider :theme="darkTheme">
    <navBar :now-active-key="activeKey" v-on:change-router="onChangeRouter" />
    <div class="hidScrollBar">
      <div class="routerContainer">
        <RouterView v-slot="{ Component }" @currentView="onCurrentView">
          <transition name="fade">
            <component :is="Component" />
          </transition>
        </RouterView>
      </div>
    </div>
  </n-config-provider>
</template>

<script setup lang="ts">
import navBar from './components/navBar.vue'
import { RouterLink, RouterView } from 'vue-router'
import { NConfigProvider, darkTheme } from 'naive-ui'
import router from './router';
import { ref } from 'vue';

const activeKey = ref<string>('main')

function onChangeRouter(page: string) {
  router.push({name: page})
}

function onCurrentView(view_name: string) {
  activeKey.value = view_name
}
</script>

<style lang="less" scoped>
.backgroundCover {
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgb(41, 42, 46);
  opacity: 0.5;
  z-index: -1;
}

.hidScrollBar {
  max-width: 1200px;
  min-width: 350px;
  width: 75vw;
  overflow: hidden;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: white;
}

.routerContainer {
  max-width: 1220px;
  min-width: 370px;
  width: calc(100% + 20px);
  margin: auto;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  // background-color: rgba(52, 54, 59, 0.65);
  background: linear-gradient(0deg,rgba(52, 54, 59, 0) 0%,rgba(52, 54, 59, 0.65) 20%,rgba(52, 54, 59, 0.65) 80%,rgba(52, 54, 59, 0) 100%); 
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: grid;
  justify-content: start;
  align-items: center;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: .5s;
  transform: translateY(0px);
}

.fade-enter-from {
  opacity: 0;
  position: absolute;
  transform: translateY(100px) scale(0.9);
  filter: saturate(20%);
}

.fade-leave-to {
  opacity: 0;
  position: absolute;
  transition-duration: .2s;
  transform: translateY(-100px) scale(0.9);
  filter: saturate(20%);
}

.bkgInfo {
  position: absolute;
  left: 20px;
  bottom: 20px;
  color: white;
}

@media screen and (max-width: 450px) {
    .routerContainer {
      width: 100vw;
    }

    .hidScrollBar {
      width: 100vw;
    }
}
</style>
