import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useConfigStroe = defineStore(
  'counter',
  () => {
    const config = ref({
      page: 'camera',
      deviceId: '',
      borderWidth: '5px',
      borderColor: '#ffffff',
      rounded: false
    })
    return {
      config
    }
  },
  {
    persist: true
  }
)
