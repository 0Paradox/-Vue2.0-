import Mock from 'mockjs'
import userApi from './mockServeData/user'

Mock.mock('/user/add','post',userApi.createUser)
Mock.mock('/user/edit','post',userApi.updateUser)
Mock.mock('/user/getuser','get',userApi.getUserList)
Mock.mock('/user/del','get',userApi.deleteUser)