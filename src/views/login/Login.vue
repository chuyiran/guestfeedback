<template>
<div>
  <van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />

  <van-form @submit="onSubmit">
    <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
    />
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit" color="#6652d1">提交</van-button>
    </div>
  </van-form>
</div>
</template>

<script>
import {Button, Form,Field,Image} from 'vant';
export default {
  name: "Login",
  components:{
    vanForm:Form,
    vanButton:Button,
    vanField:Field,
    vanImage:Image
  },
  data(){
    return{
      username:'',
      password:''
    }
  },
  methods:{
    onSubmit(){
      console.log('哈');
    }
  }
}
</script>

<style scoped lang="less">
.login_header{
  color:#6652d1;
  text-align: center;
  letter-spacing: 10px;
}
</style>