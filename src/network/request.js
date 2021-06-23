import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 拦截器
  instance.interceptors.request.use(config => {
    return Promise.resolve(config)
  }, err => Promise.reject(err))
  
  instance.interceptors.response.use(config => {
    return config

  }, err => Promise.reject(err))

  return instance(config)
}
