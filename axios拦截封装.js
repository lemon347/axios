//http://www.yyyweb.com/5135.html
//https://github.com/heuuLZP/vue-axios/tree/master/src
//  http

import axios from 'axios'
import qs from 'qs'

//添加请求拦截器
axios.interceptors.request.use(config => {
	//在发送请求之前做些什么， loading
	return config;
}, error => {
	//对请求错误做些什么
	return Promise.reject(error);
});

//添加响应拦截器
axios.interceptors.reponse.use(response => {
	//对响应数据做点什么
	return response;
}, error => {
	return Promise.reject(error);
});


function checkStatus(res){
	//loading
	//如果http状态码正常，则直接返回数据
	if(res && (res.status === 200 || res.status === 304 || res.status === 400)){
		return res;
		//如果不需要除了data之外的数据，可直接 return res.data;
	}
	//异常状态下，把错误信息返回去
	return {
		status: 400,
		msg: '网络异常'
	}	
}



function checkCode(res){
	//如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)
	//可以弹出一个错误提示，告诉用户
	if(res.status === -404){
		alert(res.msg);
	}
	if(res.data && (!res.data.success)){
		alert(res.data.error_msg);
	}
	return res;
}

export default{
	post(url, data){
		return axios({
			method: 'post',
			baseUrl: 'https://cnodejs.org/api/v1',
			url: url,
			data: qs.stringify(data),
			timeout: 10000,
			headers: {
        		'X-Requested-With': 'XMLHttpRequest',
        		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      		}
		}).then(
			(response) => {
				return checkStatus(response);
			}
		).then(
			(res) => {
				return checkCode(res);
			}
		)
	},
	
	get(url, params){
		return axios({
			method: 'get',
			baseURL: 'https://cnodejs.org/api/v1',
			url,
			params,  //get请求时带的参数
			timeout: 10000,
			headers: {
				'X-Requested-With': 'XMLHttpRequest'
			}			
		}).then(
			(response) => {
				return checkStatus(response);
			}
		).then(
			(res) => {
				return checkCode(res);
			}
		)		
	}
}


//api
export default {
  right: '/topic/5433d5e4e737cbe96dcef312', // 正确路径
  error: '/topc/5433d5e4e737cbe96dcef312', // url错误
  backEnd: '/topic/5433d5e4e737cbe96dcef31' // 参数错误
}



//前端发出请求
import http from 'http'
import api from 'api'
export default{
	methods: {
		async getData(){
			let param = {name: 'lucy', age: 26},
			const result = await http.get(api.right. param);
			if(res.data.success){
				alert('请求成功');
			}
		}
	}
}





















