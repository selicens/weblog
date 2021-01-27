<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  html, body, #app{
    height: 100%;
    margin: 0;
    padding: 0;
  }
  #app{
  }
</style>
<script>
  import Home from "./views/Home";
  export default {
    components: {Home}
  }
</script>