
//使用环境变量来定义ａｐｉ,这样就可以把好多人要请求的接口放到一起通过ａｐｉ.什么来引用
export const api=process.env.REACT_APP_RECORDS_API_URL ||"http://localhost:5000"
