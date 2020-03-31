import axios from 'axios'

const api = axios.create({
  baseURL: 'https://bethehero2.appspot.com'
})

export default api