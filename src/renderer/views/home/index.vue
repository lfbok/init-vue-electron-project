<template>
  <div class="main">
   <h1>
   <p v-for="item in 100" :key="item">  {{item}}Hello World</p>
   </h1>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="scss">
  
</style>
