<template>
  <el-form label-width="70px" :inline="true" class="login-container" :model="form" :rules="rules">
    <h3 class="login_title">系统登录</h3>
    <el-form-item  label="用户名" prop="username">
        <el-input class="inptut" v-model="form.username" placeholder="请输入账号" ></el-input>
    </el-form-item>
    <el-form-item  label="密码" prop="passward">
        <el-input class="inptut" type="password" v-model="form.passward" placeholder="请输入密码" ></el-input>
    </el-form-item>
    <el-form-item>
        <el-button @click="submit" style="margin-left: 105px;margin-top: 10px;" type="primary">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import Mock from 'mockjs';
import Cookie from 'js-cookie'
import { getMenu } from '../api';
export default {
    data(){
        return{
            form:{
                username:'',
                passward:''
            },
            rules:{
                username:[
                    {require:true, trigger: 'blur',message:'请输入用户名'}
                ],
                passward:[
                    {require:true, trigger: 'blur',message:'请输入密码'}
                ]
            }
        }
    },
    methods:{
        //登录
        submit(){
            //token信息
            const token = Mock.Random.guid()
            //token信息存入cookie用于不同页面间的通信
            Cookie.set('token',token)
            //跳转到首页
            this.$router.push('/home')
    }
    }}
</script>

<style lang="less" scoped>

    .login-container{
        width: 350px;
        border: 1px solid #eaeaea;
        margin: 180px auto;
        padding: 35px 35px 15px 35px;
        background-color: #fff;
        border-radius: 15px;
        box-shadow: 0 0 25px #cac6c6;
        box-sizing: border-box;
        .login_title{
            text-align: center;
            margin-bottom: 40px;
            color: #505458;
        }
        .inptut  {
            width: 198px;
        }      

    }
 
</style>