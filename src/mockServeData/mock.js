import Mock from 'mockjs'
import homeApi from './home'
import user from './user'

Mock.mock('/api/home/getData',homeApi.getStatisticalData)

Mock.mock('/api/user/add','post', user.createUser)
Mock.mock('/api/user/edit','post',user.updateUser)
Mock.mock('/api/user/del','post',user.deleteUser)
Mock.mock('/api/user/getUser','get',user.getUserList)