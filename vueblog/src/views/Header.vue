<template>
  <div>
    <div class="header issFixed">
      <el-menu
              class="el-menu-demo"
              mode="horizontal"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
        <el-menu-item index="1"><router-link to="/home">主页</router-link></el-menu-item>
        <el-submenu index="2">
          <template slot="title">测试</template>
          <el-menu-item index="2-1"><a href="https://cn.vuejs.org/" style="text-decoration: none; color: white">vue.js中文网</a></el-menu-item>
          <el-menu-item index="2-2"><a href="https://nodejs.org/zh-cn/" style="text-decoration: none; color: white">node</a></el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3"><router-link to="/backstage">管理</router-link></el-menu-item>
        <el-menu-item index="4"><router-link to="/login">登录</router-link></el-menu-item>
      </el-menu>
    </div>
    <div>
      <el-backtop>
        <i class="el-icon-arrow-up"></i>
      </el-backtop>
    </div>
  </div>
</template>
<script>
  import VueSticky from "vue-sticky"
  export default {
    name:'Header',
    data(){
      return{
        username:''
      }
    },
    methods:{

    },
    mounted() {

    }
  }
</script>
<style scoped>
  .header{
    position: sticky;
    top: 0;
    width: 100%;
  }
</style>