<template>
    <div>
        <Header/>
        <div class="details">
            <div class="boxTime">{{value.datetime}}</div>
            <div class="boxTitle"><h2>{{value.title}}</h2></div>
            <div class="boxArticle">{{value.article}}</div>
            <div class="boxComment">
                <div>评论：</div>
                <el-input/>
                <el-button>发表评论</el-button>
                <div class="comments">历史评论：</div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "./Header";
    export default {
        name: "Details",
        components: {Header},
        data(){
            return{
                value:''
            }
        },
        methods:{
            getDetails(){
                // 取到路由带过来的参数
                var value = this.$route.query
                // 将数据放在当前组件的数据内
                console.log("传来的参数==>"+value)
                this.value = value
            },
        },
        mounted() {
            this.getDetails()
        }
    }
</script>

<style scoped>
    .details{
        margin: 10px 20px;
    }
    .boxTime{

    }
    .boxTitle{
        text-align: center;
        padding: 20px 0;
    }
    .boxArticle{
        padding: 20px 0;
        font-size: 18px;
    }
    .boxComment{
        border: 1px solid #eeeeee;
        border-radius: 5px;
        padding: 20px;
    }
    .comments{
        border: 1px solid #eeeeee;
        height: 200px;
        margin-top: 20px;
    }
</style>