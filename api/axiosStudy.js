import axios from 'axios'
import config from '../config'

//判断当前环境
const baseURL = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

class HttpRequest{
    //基础URL构造函数
    constructor(baseURL){
        this.baseURL = baseURL
    }

    //获取基础配置方法
    getInsideConfig(){
        const config = {
            baseURL: this.baseURL,
            header:{},
        }
        return config
    }

    //请求与响应拦截器
    interceptors(axios){
        axios.interceptors.request.use(function (config) {
            return config;
        }, function (error) {
            return Promise.reject(error);
        });

            
        axios.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            return Promise.reject(error);
        });
    }

    request(options){
        //创建axios对象
        const instance = axios.create({
            baseURL:'http://localhost:3000/'
        })
        //在options中加入基础信息
        options = {...this.getInsideConfig(),...options}
        
        //拦截当前axios请求
        this.interceptors(instance)
        //返回当前axios对象
        return instance(options)
    }
}

export default new HttpRequest(baseURL)