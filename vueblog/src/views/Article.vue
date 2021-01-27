<template>
    <div>


        <div class="articleBox" v-for="(item,index) in articles" :key="item.id" v-on:click="ViewDetails(item.datetime,item.title,item.article)">
            <div class="article">
                <div class="subBox">
                    <div class="article-title"><h5>{{item.title}}</h5></div>
                    <div class="article-article"><p>{{item.article}}</p></div>
                    <div class="article-icon">
                        <i class="el-icon-time">{{item.datetime}}</i>
                        <i class="el-icon-chat-dot-round">评论({{comment}})</i>
                        <i class="el-icon-star-off">{{views}}</i>
                        <el-button class="ebt" v-on:click="ViewDetails(item.id,item.title,item.article)">查看全部</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Article",
        data(){
            return{
                comment:'',
                views:'',
                articles:[],
            }
        },
        methods:{
            query(){
                this.$axios.get('/api/query/')
                    .then(res=>{
                        console.log(res.data)
                        this.articles = res.data.data
                    })
                    .catch(err=>{
                        console.log(err)
                    })
            },
            ViewDetails(datetime,title,article){
                console.log(datetime,title,article)
                this.$router.push({path:'/details',query:{datetime,title,article}})
            }
        },
        mounted(){
            this.query()
        }
    }
</script>

<style scoped>
    .articleBox{
        height: 200px;
        border: 1px solid aliceblue;
        border-radius: 5px;
        margin: 10px;
        background-color: aliceblue;
    }
    .article{
        height: 178px;
        border: 1px solid #eeeeee;
        border-radius: 5px;
        margin: 10px;
        background-color: lightcyan;
    }
    .subBox{
        margin: 10px;
    }
    .article-icon i{
        margin: 0 10px;
    }
    .ebt{
        font-size: 10px;
        line-height: 5px;
    }
</style>