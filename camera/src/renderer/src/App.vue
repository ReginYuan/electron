<script setup lang="ts">
import Camera from './components/Camera.vue'
import Setting from './components/Setting.vue'
import { Setting as settingIcon, CameraFive, InnerShadowTopLeft } from '@icon-park/vue-next'
// import useConfig from './composables/useConfig'
// const { config } = useConfig()
import { useConfigStroe } from '@renderer/stores/useConfigStore'
import useDrag from '@renderer/composables/useDrag'
const { config } = useConfigStroe()
const { drag } = useDrag()

// 推拽窗口
drag.run()
// 退出功能
const quit = () => {
  window.api.quit()
}
// 切换圆角
const changeRound = () => {
  config.rounded = !config.rounded
  if (config.rounded) {
    window.api.setWindowSize({ aspectRatio: 1, width: 300, height: 300 })
  } else {
    window.api.setWindowSize({ aspectRatio: 16 / 9, width: 500, height: 300 })
  }
}
</script>

<template>
  <!--Suspense全局异步组件渲染  -->
  <Suspense>
    <main class="relative group" @contextmenu="quit">
      <section>
        <settingIcon v-if="config.page == 'camera'" theme="outline" size="24"
          class="absolute left-1/2 -translate-x-1/2 mt-3 text-white opacity-80 cursor-pointer z-10 hidden group-hover:block"
          @click="config.page = 'setting'">
        </settingIcon>
        <CameraFive v-if="config.page == 'setting'" theme="outline" size="24"
          class="absolute left-1/2 -translate-x-1/2 mt-3 text-white opacity-80 cursor-pointer z-10"
          @click="config.page = 'camera'" />
        <!-- 切换圆角 -->
        <InnerShadowTopLeft v-if="config.page == 'camera'" theme="outline" size="24"
          class="absolute left-1/2 -translate-x-1/2 mt-3 bottom-3 text-white opacity-80 cursor-pointer z-10 hidden group-hover:block"
          @click="changeRound" />
      </section>
      <section>
        <!-- 渲染相机组件 -->
        <Camera v-if="config.page == 'camera'" />
        <!-- 渲染设置组件 -->
        <Setting v-else />
      </section>
    </main>
  </Suspense>
</template>
<style lang="scss">
</style>
