import { ref } from 'vue'

type ConfigType = {
  deviceId: string
  page: string
}

const initConfig = {
  deviceId: '111',
  page: 'camera'
}

export default () => {
  //初始化配置
  const cache = localStorage.getItem('config')
  const data = cache ? (JSON.parse(cache) as ConfigType) : initConfig
  const config = ref(data)

  // 更新配置
  const updateConfig = () => {
    localStorage.setItem('config', JSON.stringify(config.value))
  }
  return { config, updateConfig }
}
