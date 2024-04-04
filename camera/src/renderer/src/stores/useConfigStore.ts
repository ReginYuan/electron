import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useConfigStroe = defineStore(
  'counter',
  () => {
    const config = ref({
      page: 'camera',
      deviceId: '',
      borderWidth: '10px',
      borderColor: '#ffffff',
      rounded: false
    })
    const updateConfig = () => {}
    return {
      config,
      updateConfig
    }
  },
  {
    persist: true
  }
)
