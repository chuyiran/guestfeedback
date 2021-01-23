<template>
  <div id="app">
    <div class="login">
      <cyr_login></cyr_login>
    </div>
  </div>
</template>

<script>
import  {Button} from 'vant'
import  cyr_login from 'views/login/Login'
export default {
  name:'app',
  components:{
    vanButton:Button,
    cyr_login,
  }
}
</script>

<style scoped>
#app{
  padding-top: 100px;
}

</style>
