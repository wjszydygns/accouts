import axios from "axios"
//使用环境变量来定义ａｐｉ,这样就可以把好多人要请求的接口放到一起通过ａｐｉ.什么来引用
//REACT_APP_RECORDS_API_URL这就是一个环境变量，要在ｓｃｒｉｐｔｓ里面定义这个环境变量的值,process.env是引用环境变量的前缀
 const api=process.env.REACT_APP_RECORDS_API_URL ||"http://localhost:5000"

//将axios请求全部封装到一个方法里面

export const getAll=()=>{
    axios.get(`${api}api/v1/records`)




}