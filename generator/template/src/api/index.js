import generateInstance from './common';
import iView from 'iview';

const ajax = generateInstance({
  baseURL: 'imageUrl',
  responseFun: (c) => {
    if (c.data.status !== 0 && c.data.status) {
      let msg = c.data.message || '发生错误，请联系管理员';
      iView.Message.error(msg);
    }
    return c;
  }
});

export default {
  demoRequest (data) {
    return ajax({
      url: `/api/demo`,
      method: 'POST',
      data
    });
  }
};
