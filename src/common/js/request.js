import axios from 'axios'
import storage from 'good-storage'

/* eslint-disable */
const service = axios.create({
  // baseURL: 'http://talk.17link.cc/', // api的base_url
  timeout: 5000 // request timeout
})
// request interceptor
service.interceptors.request.use(config => {
  // Do something before request is sent
  const token = storage.get('sessionKey', '')
  if (token) {
    config.headers['sessionKey'] = token // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
	}
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

export default service
