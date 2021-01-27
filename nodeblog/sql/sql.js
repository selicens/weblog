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
module.exports = {
    query,
    add,
    deletes,
    alter
}