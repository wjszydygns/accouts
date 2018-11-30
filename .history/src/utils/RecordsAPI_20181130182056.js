import axios from "axios"
//使用环境变量来定义ａｐｉ,这样就可以把好多人要请求的接口放到一起通过ａｐｉ.什么来引用
//REACT_APP_RECORDS_API_URL这就是一个环境变量，要在ｓｃｒｉｐｔｓ里面定义这个环境变量的值,process.env是引用环境变量的前缀
 const api=process.env.REACT_APP_RECORDS_API_URL ||"http://localhost:5000"

//将axios请求全部封装到一个方法里面

export const getAll=()=>{
    //注意箭头函数要加大括号的话必须加return,否则没有返回值
   return axios.get(`${api}api/v1/records`)

}
export const create=(body)=>{
//添加一条记录时，也要向那个接口发送请求，因为我们现在的数据不是写死的，而是从上面那个接口请求回来的，那个数据是要求有一个ｉｄ作为ｒｅｃｏｒｄ的key值的
//所以我们也要有id，这个id 可以是它自己生成的
//要发一个post 请求
　return 　axios.post(`${api}api/v1/records`,body)   //axios.post(url,参数对象)  

}

export const update=(id,body)=>{
//更新数据，向接口发送数

  return axios.put(`${api}api/v1/records/${id}}`,body)

}