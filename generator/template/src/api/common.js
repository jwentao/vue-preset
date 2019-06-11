import axios from 'axios';

const generateInstance = ({ baseURL, headers = {}, responseFun = () => {} }) => {
   const instance = axios.create({
    baseURL, // 根域名
    timeout: 60000, // 默认超时时间
    headers
  });
  instance.defaults.withCredentials = true;
  instance.interceptors.request.use(c => {
    c.headers['x-requested-with'] = 'XMLHttpRequest';
    return c;
  });
  instance.interceptors.response.use(responseFun, err => {
    console.log(err);
  });
  return instance;
};

export default generateInstance;
