import axios from 'axios';
/**
 * 前后端请求
 *
 * @export
 * @param {any} URL 地址
 * @param {any} params 参数
 * @returns
 */
export default function createRequestHttp (URL, params) {
  return new Promise(function (resolve, reject) {
    let instance = axios.create();
    instance.defaults.baseURL = window.CONFIG.baseURL;
    instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    instance.defaults.withCredentials = true;
    instance.defaults.transformRequest = [
      function (data) {
        let newData = [];
        for (let k in data) {
          newData.push(encodeURIComponent(k) + '=' + encodeURIComponent(data[k]));
        }
        return newData.join('&');
      }
    ];
    instance.defaults.transformResponse = [
      function (res) {
        res = JSON.parse(res);
        if (res.state !== 1) {
          throw Error('请求失败');
        }
        return res.data;
      }
    ];
    instance.post(URL, params)
      .then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
  });
}
