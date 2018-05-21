import axios from 'axios';
import qs from 'qs';
//请求拦截器
axios.interceptors.request.use(config => {
  config.headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'cookieid': 'ASDASDASFGSDGASDFASDF'
  };
  //  在post请求发送出去之前，对其进行编码
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }

  return config
}, error => {
  return Promise.reject(error)
});


//http response 拦截器
//响应拦截器即异常处理
axios.interceptors.response.use(response => {
  return response
}, error => {
  if (error.response) {
    switch (error.response.status) {
      case 400:
        error.message = '错误请求'
        break;
      case 401:
        error.message = '未授权，请重新登录'
        break;
      case 403:
        error.message = '拒绝访问'
        break;
      case 404:
        error.message = '请求错误,未找到该资源'
        break;
      case 405:
        error.message = '请求方法未允许'
        break;
      case 408:
        error.message = '请求超时'
        break;
      case 500:
        error.message = '服务器端出错'
        break;
      case 501:
        error.message = '网络未实现'
        break;
      case 502:
        error.message = '网络错误'
        break;
      case 503:
        error.message = '服务不可用'
        break;
      case 504:
        error.message = '网络超时'
        break;
      case 505:
        error.message = 'http版本不支持该请求'
        break;
      default:
        error.message = `连接错误${error.response.status}`
    }

  }
  
  return Promise.reject(error); // 返回接口返回的错误信息
});

export default {
  /**
   * 封装get方法
   * @param url
   * @param data
   * @returns {Promise}
   */
  get: function (url, data = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
          params: data,
        })
        .then(response => {
          resolve(response.data);
        }, err => {
          reject(err)
        })
    })
  },
  /**
   * 封装post请求
   * @param url
   * @param data
   * @returns {Promise}
   */
  post: function (url, data = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, data)
        .then(response => {
          resolve(response.data);
        }, err => {
          reject(err)
        })
    })
  }
}

