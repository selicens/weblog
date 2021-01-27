<template>
    <div>
        <el-form label-width="80px">
            <el-form-item label="账号">
                <el-input v-model="username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="password"></el-input>
            </el-form-item>
        </el-form>
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
        }
    }
</script>

<style scoped>

</style>