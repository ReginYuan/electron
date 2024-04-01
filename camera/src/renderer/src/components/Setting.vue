<template>
  <main class="bg-[#2c3e50] w-screen h-screen p-5 flex flex-col gap-5 py-10">
    <h2 class="text-gray-50 text-center text-sm mb-5 opacity-70">参数设置</h2>
    <el-select v-model="config.deviceId" placeholder="请选择摄像头" clearable filterable>
      <el-option v-for="camera in cameras" :key="camera.deviceId" :label="camera.label" :value="camera.deviceId"
        size="large">
      </el-option>
    </el-select>
    <el-button type="success" style="width: 100%" size="large" @click="updateConfig">保存</el-button>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import useConfig from '../composables/useConfig'

// 声明摄像头设备类型
interface CameraDevice {
  deviceId: string
  label: string
}

const { config, updateConfig } = useConfig()
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

const onSubmit = () => {
  console.log('111')
}
</script>
