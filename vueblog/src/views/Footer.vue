<template>
    <div>
        <div class="footer">
            <div style="height: 50px"></div>
            <div>Copyright © 2020-2021 ZhouWei</div>
            <div>
                <a href="https://nodejs.org/zh-cn/">Node.js中文网</a>|
                <a href="https://cn.vuejs.org/">Vue.js中文网</a>|
                <a href="https://www.runoob.com/" target="view_frame">菜鸟教程</a>|
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    .footer{
        border: 1px solid #545c64;
        background:#545c64;
        color: #ffffff;
        height: 100px;
        width: 100%;
        text-align: center;
    }
    a{
        text-decoration: none;
        color: white;
    }
    a:hover{
        color: red;
        border: 1px solid #eeeeee;
        background-color: #eeeeee;
        border-radius: 5px;
    }
</style>