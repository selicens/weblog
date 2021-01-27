<template>
    <div>
        <Header/>
        <el-row>
            <el-col :span="24">
                <el-tabs tab-position="left" style="height: 100%;">
                    <el-tab-pane label="文章管理">
                        <el-table
                                :data="tableData"
                                height="250"
                                border
                                style="width: 100%">
                            <el-table-column
                                    prop="id"
                                    label="ID"
                                    width="60">
                            </el-table-column>
                            <el-table-column
                                    prop="title"
                                    label="标题"
                                    width="180">
                            </el-table-column>
                            <el-table-column
                                    prop="article"
                                    label="文章">
                            </el-table-column>
                            <el-table-column fixed="right" label="操作" width="100">
                                <template slot-scope="scope">
                                    <el-button type="text" size="small" v-on:click="playClick">编辑</el-button>
                                    <el-button type="text" size="small" v-on:click="deleteClick">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div class="update" v-show="play">
                            <div>
                                <el-form label-position="left" label-width="80px" >
                                    <el-form-item label="ID">
                                        <el-input v-model="id" placeholder="id不可修改，输入用于查询"></el-input>
                                    </el-form-item>
                                    <el-form-item label="标题">
                                        <el-input v-model="updatetitle"></el-input>
                                    </el-form-item>
                                    <el-form-item label="文章">
                                        <el-input v-model="updatearticle"></el-input>
                                    </el-form-item>
                                    <el-button type="primary" plain @click="updateArticle">确认修改</el-button>
                                </el-form>
                            </div>
                        </div>
                        <div class="delete" v-show="deletes">
                            <div>
                                <el-form label-position="left" label-width="80px" >
                                    <el-form-item label="ID">
                                        <el-input v-model="id" placeholder="输入ID并确认删除"></el-input>
                                    </el-form-item>
                                    <p>一经删除无法恢复数据，请确认是否删除！</p>
                                    <el-button type="primary" plain @click="deleteArticle">确认删除</el-button>
                                </el-form>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="新增文章">
                        <el-input type="text" v-model="title"><template slot="prepend">标题</template></el-input>
                        <el-input v-model="datetime"></el-input>
                        <mavon-editor v-model="article"></mavon-editor>
                        <el-button style="margin: 30px 0" type="primary" v-on:click="addArticle">上传<i class="el-icon-upload el-icon--right"></i></el-button>
                    </el-tab-pane>
                    <el-tab-pane label="角色管理">角色管理</el-tab-pane>
                    <el-tab-pane label="测试接口">
                        <div class="a-Go">
                            <a href="https://nodejs.org/zh-cn/">Node.js中文网</a>|
                            <a href="https://cn.vuejs.org/">Vue.js中文网</a>|
                            <a href="https://www.runoob.com/" target="view_frame">菜鸟教程</a>|
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </el-col>
        </el-row>
        <Footer style="position: fixed;bottom: 0;width: 100%"/>
    </div>
</template>

<script>
    import Header from "./Header";
    import Footer from "./Footer";
    export default {
        name: "Backstage",
        data(){
            return{
                play:false,
                deletes:false,
                title: '',
                article: '',
                id:'',
                updatetitle:'',
                updatearticle:'',
                tableData: [],
                datetime:''
            }
        },
        components: {Footer, Header},
        methods:{
            queryMysql(){
                this.$axios.get('/api/query/')
                    .then(res=>{
                        console.log(res.data)
                        this.tableData = res.data.data
                    })
                    .catch(err=>{
                        console.log(err)
                    })
            },
            playClick(){this.play = !this.play},
            deleteClick(){this.deletes = !this.deletes},
            updateArticle(){
                let id = this.id
                let title = this.updatetitle
                let article = this.updatearticle
                this.$axios.post('/api/alter/',{id,title,article})
                    .then(res=>{
                        console.log(res)
                    })
                    .catch(err=>{
                        console.log(err)
                    })
            },
            addArticle(){
                let title=this.title
                let article=this.article
                let datetime=this.datetime
                this.$axios.post('/api/add/',{title,article,datetime})
                    .then(res=>{
                        console.log(res.data)
                    })
                    .catch(err=>{
                        console.log(err)
                    })
            },
            deleteArticle(){
                let id = this.id
                this.$axios.post('/api/deletes/',{id})
                .then(res=>{
                    console.log(res)
                })
                .catch(err=>{
                    console.log(err)
                })
            }
        },
        mounted() {
            this.queryMysql()
            let date = new Date();
            let y = date.getFullYear();// 年
            let MM = date.getMonth() + 1;// 月
            MM = MM < 10 ? ('0' + MM) : MM;
            let d = date.getDate();// 日
            d = d < 10 ? ('0' + d) : d;
            let h = date.getHours();// 时
            h = h < 10 ? ('0' + h) : h;
            let m = date.getMinutes();// 分
            m = m < 10 ? ('0' + m) : m;
            let s = date.getSeconds();// 秒
            s = s < 10 ? ('0' + s) : s;
            let time= y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
            this.datetime = time //转换结果为 2019-05-15 15:30:24
        },

    }
</script>

<style scoped>
    .box{
        height: 100%;
    }
    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }
    .update{
        border-radius: 5px;
        border: 1px solid red;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .delete{
        border-radius: 5px;
        border: 1px solid red;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .a-Go{
        display: flex;
        flex-wrap: wrap;
        width: 300px;
        line-height: 20px;
    }
    .a-Go a{
        text-decoration: none;
        color: black;
    }
    .a-Go a:hover{
        color: red;
        border: 1px solid #eeeeee;
        background-color: #eeeeee;
        border-radius: 5px;
    }
</style>