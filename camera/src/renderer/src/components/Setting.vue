<template>
  <main class="bg-[#2c3e50] w-screen h-screen p-5 flex flex-col gap-5 py-10">
    <h2 class="text-gray-50 text-center text-sm opacity-70">参数设置</h2>
    <el-select v-model="config.deviceId" placeholder="请选择摄像头" clearable filterable>
      <el-option v-for="camera in cameras" :key="camera.deviceId" :label="camera.label" :value="camera.deviceId"
        size="large">
      </el-option>
    </el-select>
    <el-input v-model="config.borderWidth" placeholder="边框宽度" size="large" clearable></el-input>
    <el-input v-model="config.borderColor" placeholder="边框颜色" size="large" clearable></el-input>
    <a href="https://github.com/ReginYuan/electron-practice/tree/main/camera" target="_blank"
      class="text-center opacity-70 text-teal-100 hover:text-yellow-400 text-xs">软件所有权为ReginYuan所有</a>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// import useConfig from '../composables/useConfig'
// const { config, updateConfig } = useConfig()
import { useConfigStroe } from '@renderer/stores/useConfigStore'
const { config } = useConfigStroe()
// 声明摄像头设备类型
interface CameraDevice {
  deviceId: string
  label: string
}

const cameras = ref<CameraDevice[]>([]) // 指定 cameras 的类型为 CameraDevice 数组

const getCameras = async () => {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices()
    cameras.value = devices
      .filter((device) => device.kind === 'videoinput')
      .map((device) => ({
        deviceId: device.deviceId,
        label: device.label
      })) as CameraDevice[] // 映射设备数组为 CameraDevice 类型数组
  } catch (error) {
    console.error('Error getting cameras:', error)
  }
}

onMounted(() => {
  getCameras()
})
</script>

<style lang="scss" scoped>
</style>
