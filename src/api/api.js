// 封装接口文件
import axios from 'axios'

// 快捷
// axios.defaults.baseURL = 'http://localhost:3000'

// 推荐
let req = axios.create({
    baseURL: 'http://192.168.5.103:3000', // 公共基本路径
    timeout: 10000  // 单位：ms 请求10秒，如果超时，提示超时（8-12s）
})

export function getSeller(){
    return req.get('/api/seller')
}

export function getGoods(){
    return req.get('/api/goods')
}