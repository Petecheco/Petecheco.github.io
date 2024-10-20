<template>
    <div class="vNavBar" 
      @mouseenter="enterNav"
      @mouseleave="leaveNav"
    >
        <n-space :vertical="isVertical">
            <n-menu
              @click="emit('changeRouter', activeKey)"
              v-model:value="activeKey"
              :collapsed="collapsed"
              :collapsed-width="64"
              :collapsed-icon-size="22"
              :options="menuOptions"
              :mode="menuMode"
            />
        </n-space>
    </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import { h, ref, watch } from 'vue'
import { NIcon, NSpace, NMenu } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { PersonCircle, Newspaper, Call, Book, InformationCircle } from '@vicons/ionicons5'

const props = defineProps({
  nowActiveKey: {
      type: String,
      default: '',
  }
})
const emit = defineEmits(['changeRouter'])
const collapsed = ref<boolean>(true)
const activeKey = ref<string>('main')
const isVertical = ref<boolean>(true)
const menuMode = ref<any>('vertical')

console.log(props.nowActiveKey)

watch(props, () => {
  activeKey.value = props.nowActiveKey
})

window.onresize = () => {
  checkWidth()
}

function checkWidth() {
  if (window.innerWidth <= 450) {
    isVertical.value = false
    menuMode.value = 'horizontal'
  }
  else {
    isVertical.value = true
    menuMode.value = 'vertical'
  }
}

checkWidth()

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    label: 'About Me',
    key: 'main',
    icon: renderIcon(PersonCircle)
  },
  {
    label: 'My Articles',
    key: 'article',
    icon: renderIcon(Book)
  },
  {
    label: 'News',
    key: 'news',
    icon: renderIcon(Newspaper)
  },
  {
    label: 'Contact Me',
    key: 'contact',
    icon: renderIcon(Call)
  },
  {
    label: 'About This Site',
    key: 'about',
    icon: renderIcon(InformationCircle)
  }
]

function enterNav() {
  if (isVertical.value) {
    collapsed.value = false;
  }
}

function leaveNav() {
  collapsed.value = true;
}
</script>

<style lang="less" scoped>
.vNavBar {
  width: 64px;
  height: auto;
  position: fixed;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  transition-duration: .4s;
  padding: 10px;
  background-color: rgba(52, 54, 59, 0.5);
  border-radius: 2px;
  z-index: 10000;
}

.vNavBar:hover {
  background-color: rgba(52, 54, 59, 0.8);
  width: 240px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
}

@media screen and (max-width: 450px) {
  .vNavBar {
    top: 0px;
    left: 0px;
    transform: translateY(0%);
    width: 100vw;
    margin: 0;
  }

  .vNavBar:hover {
    width: 100vw;
  }
}
</style>