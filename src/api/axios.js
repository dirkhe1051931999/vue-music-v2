import axios from 'axios';

// 基础配置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.timeout = 20000;
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'http://38.55.251.226:3001';

// 状态码信息
const codeMessage = {
  200: '请求成功',
  401: '未授权',
  403: '禁止访问',
  404: '未找到',
  500: '服务器错误',
};

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('BLOG_TOKEN');
    if (token) {
      config.headers.common['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 响应拦截器
axios.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

// 请求方法封装
export default async (url = '', params = {}, method = 'get', isUpload = false) => {
  method = method.toLowerCase();
  const config = isUpload ? { headers: { 'Content-Type': 'multipart/form-data' } } : {};

  // 处理GET请求参数
  if (method === 'get' && Object.keys(params).length) {
    const queryString = Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')
      .replace(/#/g, '%23');
    url += `?${queryString}`;
  }

  try {
    const response = await axios[method](url, method === 'get' ? null : params, config);
    return {
      ...response.data,
      message: codeMessage[response.status],
    };
  } catch (error) {
    return Promise.reject(error);
  }
};