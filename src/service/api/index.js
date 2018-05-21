import * as api from '@/service/ajax.config';
const ajax=api.default;
export default {
    getuser:(body)=>{
        return ajax.get('/api/getuser', body)
          .then((res) => {
            let resulf = {
              success: false,
              msg: "",
              data:{}
            };
            if (res.code == "0000") {
              resulf = {
                success: true,
                msg: res.msg,
                data:res.data
              }
            } else {
              resulf = {
                success: false,
                msg: res.msg,
                data:res.data
              }

            }
            return resulf

          })

    },
}