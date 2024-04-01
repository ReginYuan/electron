<script setup lang="ts">
import Camera from './components/Camera.vue'
import Setting from './components/Setting.vue'
import { Setting as settingIcon, CameraFive } from '@icon-park/vue-next'
import useConfig from './composables/useConfig'
const { config } = useConfig()
</script>

<template>
  <!--Suspense全局异步组件渲染  -->
  <Suspense>
    <main class="relative group">
      <section>
        <settingIcon v-if="config.page == 'camera'" theme="outline" size="24"
          class="absolute left-1/2 -translate-x-1/2 mt-3 text-white opacity-80 cursor-pointer z-10"
          @click="config.page = 'setting'">
        </settingIcon>
        <CameraFive v-if="config.page == 'setting'" theme="outline" size="24"
          class="absolute left-1/2 -translate-x-1/2 mt-3 text-white opacity-80 cursor-pointer z-10"
          @click="config.page = 'camera'" />
      </section>
      <section>
        <Camera v-if="config.page == 'camera'" />
        <Setting v-else />
      </section>
    </main>
  </Suspense>
</template>
