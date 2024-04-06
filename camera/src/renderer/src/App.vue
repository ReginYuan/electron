<script setup lang="ts">
import Camera from './components/Camera.vue'
import Setting from './components/Setting.vue'
import { Setting as settingIcon, CameraFive, InnerShadowTopLeft } from '@icon-park/vue-next'
// import useConfig from './composables/useConfig'
// const { config } = useConfig()
import { useConfigStroe } from '@renderer/stores/useConfigStore'
import useDrag from '@renderer/composables/useDrag'

const { drag } = useDrag()

// 推拽窗口
drag.run()

const { config } = useConfigStroe()
// 退出功能
const quit = () => {
  window.api.quit()
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
        <InnerShadowTopLeft v-if="config.page == 'camera'" theme="outline" size="24"
          class="absolute left-1/2 -translate-x-1/2 mt-3 bottom-3 text-white opacity-80 cursor-pointer z-10 hidden group-hover:block"
          @click="config.rounded = !config.rounded" />
      </section>
      <section>
        <Camera v-if="config.page == 'camera'" />
        <Setting v-else />
      </section>
    </main>
  </Suspense>
</template>
<style lang="scss">
</style>
