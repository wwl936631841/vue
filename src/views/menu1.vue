<template>
  <div class="buju">
    <div class="left">
      <router-link to="/one/login">登录</router-link>
      <router-link to="/one/regisiter">注册</router-link>
    </div>
    <div class="right">
      <div class="top">头部</div>
      <div class="center">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
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
