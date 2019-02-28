<template>
  <div class="buju">
    <div class="left">
      <router-link :to="{name:'login',params:{userid:123}}">登录</router-link>
      <!-- 编程式导航传参 -->
      <span @click="to(userid)" style="margin:0 5px;">编程式</span>
      <router-link to="/one/regisiter">注册</router-link>
    </div>
    <div class="right">
      <div class="top">头部
        <nv-input v-model="currentValue" :disabled='false'></nv-input>
      </div>
      <div class="center">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
// import NvInput from '../../package/input/input.vue'
export default {
  // components:{NvInput},
  data(){
    return{
      currentValue:"wang",
      userid:23
    }
  },
  methods:{
    //  编程式导航传参 
    to(id){
      this.$router.push(`/one/login/${id}`)
    }
  }
};
</script>
<style scoped lang="scss">
.buju {
  width: 100%;
  height: 100vh;
  display: flex;
}

.left {
  width: 200px;
  height: 500px;
  float: left;
  border: 1px solid red;
}

.right {
  width: 100%;
  /* overflow: hidden; */
  height: 500px;
  /* float: right; */
  border: 1px solid green;
}

.top {
  height: 100px;
  border: 1px solid black;
}
</style>
