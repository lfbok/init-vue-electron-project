<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'facebook-tool'
  }
</script>

<style lang="scss">
@import url("./assets/styles/reset.scss");
body{
  margin: 0;
  padding: 0;
  font-family: 'Arial', 'Helvetica', 'sans-serif','微软雅黑';
  width: 100%;
  height: 100vh;
  overflow: hidden;
  // background-image: url('./assets/bg.jpg');
  // background-repeat: no-repeat;
  // background-size: cover;
  // background-position: center;
  #app{
    height: 100%;
    -webkit-user-select: none;
  }
}
</style>
