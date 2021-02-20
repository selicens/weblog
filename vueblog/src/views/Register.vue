<template>
    <div class="register-box">
        <div class="register-box-center">
            <el-form label-width="40px">
                <el-form-item label="账号">
                    <el-input v-model="username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="password"></el-input>
                </el-form-item>
            </el-form>
            <div class="register-box-button">
                <el-button type="primary" plain v-on:click="register">注册</el-button>
                <el-button plain v-on:click="goLogin">登录</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data(){
            return{
                username:'',
                password:'',
            }
        },
        methods:{
            register(){
                let username = this.username
                let password = this.password
                this.$axios.post('/api/register/',{username,password})
                .then(res=>{
                    console.log(res.data)
                    this.$message.success(res.data.msg);
                })
            },
            goLogin(){
                this.$router.push({path:'/login'})
            }
        }
    }
</script>

<style scoped>
    .register-box{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #eeeeee;
    }
    .register-box-center{
        border-radius: 5px;
        background-color: white;
        border: 1px solid #cccccc;
        padding: 40px;
    }
    .register-box-button{
        margin: 0 80px;
    }
</style>