<template>
    <div class="login-box">
        <div class="login-box-center">
            <el-form label-width="40px">
                <el-form-item label="账号">
                    <el-input v-model="username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="password"></el-input>
                </el-form-item>
            </el-form>
            <div class="login-box-button">
                <el-button type="primary" plain v-on:click="login">登录</el-button>
                <el-button plain v-on:click="goRegister">注册</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                username:'',
                password:'',
            }
        },
        methods:{
            login(){
                let username = this.username
                let password = this.password
                this.$axios.post('/api/login/',{username,password})
                .then(res=>{
                    console.log(res.data)
                    if (res.data.code==200){
                        this.$message.success(res.data.msg);
                        this.$router.push('/home')
                    }else {
                        this.$message.warning(res.data.msg)
                    }
                })
                .catch(err=>{
                    console.log(err)
                    this.$message.warning(err)
                })
            },
            goRegister(){
                this.$router.push({path:'/register'})
            }
        }
    }
</script>

<style scoped>
    .login-box{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #eeeeee;
    }
    .login-box-center{
        border-radius: 5px;
        background-color: white;
        border: 1px solid #cccccc;
        padding: 40px;
    }
    .login-box-button{
        margin: 0 80px;
    }
</style>