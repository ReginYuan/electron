<template>
  <main class="w-screen h-screen overflow-hidden" :class="{ 'rounded-full': config.rounded }"
    :style="`border:solid ${config.borderWidth} ${config.borderColor}`">
    <video class="object-cover h-full w-full" :class="{ 'rounded-full': config.rounded }"></video>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
// import useConfig from '../composables/useConfig'
// const { config } = useConfig()
import { useConfigStroe } from '@renderer/stores/useConfigStore'
const { config } = useConfigStroe()
onMounted(async () => {
  /**
   * Navigator.mediaDevices 只读属性返回一个 MediaDevices 对象，
   * 该对象可提供对相机和麦克风等媒体输入设备以及屏幕共享的连接访问。
   * */
  // const mediaDevices = await navigator.mediaDevices.enumerateDevices()
  // console.log(mediaDevices)

  const video = document.querySelector('video')!
  /***
   * constraints 参数是一个包含了video 和 audio两个成员的MediaStreamConstraints 对象，用于说明请求的媒体类型。
   * 必须至少一个类型或者两个同时可以被指定。如果浏览器无法找到指定的媒体类型或者无法满足相对应的参数要求，
   * 那么返回的 Promise 对象就会处于 rejected［失败］状态，NotFoundError作为 rejected［失败］回调的参数。
   * */
  const constraints = {
    audio: false,
    video: {
      deviceId: config.deviceId
    }
  } as MediaStreamConstraints
  navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
    video.srcObject = stream
    video.play()
  })
})
</script>

<style lang="less" scoped>
</style>
