/*api接口统一管理*/
import {get, post} from './http'

//post 接口请求
//http://www.baiodu.com/api/v1/users/my_address/address_edit_befor
export default apiAddress = p => post('http://www.baiodu.com/api/v1/users/my_address/address_edit_befor', p)
//我们定义了一个apiAddress方法，这个方法有一个参数p，p是我们请求接口时携
//带的参数对象。而后调用了我们封装的post方法，post方法的第一个参数是我们
//的接口地址，第二个参数是apiAddress的p参数，即请求接口时携带的参数对象。
//最后通过export导出apiAddress。

//在页面中调用我们的api的接口
export default{
	created(){
		this.onLoad()
	},
	methods: {
		//获取数据
		onLoad(){
			//调用api接口，提供了两个参数
			apiAddress({
				type: 0,
				sort: 1
			}).then(res => {
				//获取数据成功后的操作
			});
		}
	}
}

