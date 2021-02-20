var db = require('../sql/db')
/*查询*/
query = (req,res)=>{
    var sql = `select * from test `
    var sqlArr = []
    var callback = (err,data)=>{
        if(err) {
            res.send({code:400,msg:'查询失败！',})
        }else {
            res.send({code:200,msg:'查询成功！',data})
        }
    }
    db.sqlConnect(sql, sqlArr, callback);
}

/*增加*/
add = (req,res)=>{
    let title = req.body.title
    let article = req.body.article
    let datetime = req.body.datetime
    var sql = `insert into test(title,article,datetime) value(?,?,?)`
    var sqlArr = [title,article,datetime]
    var callback = (err,data)=>{
        if(err) {
            res.send({code:400,msg:'增加失败！'})
        }else {
            res.send({code:200,msg:'增加成功！'})
        }
    }
    db.sqlConnect(sql, sqlArr, callback);
}
/*删除*/
deletes  = (req,res)=>{
    var id = req.body.id
    var sql = `delete from test where id=?`
    var sqlArr = [id]
    var callback = (err,data)=>{
        if(err) {
            res.send({code:400,msg:'删除失败！'})
        }else {
            res.send({code:200,msg:'删除成功！'})
        }
    }
    db.sqlConnect(sql, sqlArr, callback);
}
/*更新（改）*/
alter = (req,res)=>{
    var id = req.body.id
    var title = req.body.title
    var article = req.body.article
    var sql = `update test set title='${title}',article='${article}' where id='${id}'`
    var sqlArr = []
    var callback = (err,data)=>{
        if(err) {
            res.send({code:400,msg:'更新失败！'})
        }else {
            res.send({code:200,msg:'更新成功！'})
        }
    }
    db.sqlConnect(sql, sqlArr, callback);
}
/*注册*/
register = (req,res)=>{
    var username = req.body.username
    var password = req.body.password
    var sql = `insert into user(username,password) value(?,?)`
    var sqlArr = [username,password]
    var callback = (err,data,)=>{
        if (err){
            res.send({
                status:'0',
                msg:'注册失败，用户名或密码错误！'
            })
        }else {
            res.send({
                status:'1',
                msg:'注册成功，欢迎加入大家庭！'
            })
        }
    }
    db.sqlConnect(sql, sqlArr, callback);
}
/*登录*/
login = (req,res)=>{
    var username = req.body.username
    var password = req.body.password
    var sql = `select * from user where username=? and password=?`
    var sqlArr = [username,password]
    var callback = async (err,data,)=>{
        if (err){
            console.log(err)
            res.send({
                'code':400,
                'msg':'出错了！'
            })
        }else if (data == ""){
            res.send({
                'code':400,
                'msg':'用户名或者密码出错了！',
                'data':[]
            })
        }else {
            let password = data[0].password
            let result = await password
            data[0].userinfo = result[0];
            res.send({
                'code':200,
                'msg':'登录成功,欢迎回家！',
                'data':data[0]
            })
        }
    }
    db.sqlConnect(sql, sqlArr, callback);
}

/*分页*/
page = (req,res)=>{
    let currentPage = req.body.currentPage || 1
    let pageSize = req.body.pageSize || 10
    let page = (currentPage-1)*pageSize //从哪条开始查
    var sql = `select * from user;select * from user limit ?,? `
    var sqlArr = [page,pageSize]
    var callback = (err,data)=>{
        if(err) {
            res.send({code:400,msg:'查询失败！'})
        }else {

            res.send({code:200,msg:'查询成功！',data})
        }
    }
    db.sqlConnect(sql, sqlArr, callback);
}

module.exports = {
    query,
    add,
    deletes,
    alter,
    register,
    login,
    page
}