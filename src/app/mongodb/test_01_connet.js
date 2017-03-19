const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://mongodb://user:pass@localhost:port/database');
var db = mongoose.connect("mongodb://127.0.0.1:27017/mongodb");
db.connection.on("error", function () {
    console.log("数据库连接失败：" + error);
});
db.connection.on("open", function () {
    console.log("数据库连接成功");
});
mongoose.connection.on('disconnected', function () {
    console.log('数据库连接断开');
});
module.exports=db
//常用连接方式总结
/*
//方式一：
var dbURI = 'mongodb://localhost/mongoose';
mongoose.connect(dbURI);
//方式二：
var dbURI = 'mongodb://localhost/mongoose';
var adminConnection = mongoose.createConnection(dbURI);
//如果需要声明端口号：
var dbURI = 'mongodb://localhost:27018/mongoose';
//如果需要定义用户名和密码：
var dbURI = 'mongodb://username:password@localhost/mongoose';
//也可以像下面这样传一个对象类型的参数：
var dbURI = 'mongodb://localhost/mongoose';
var dbOptions = {'user':'db_username','pass':'db_password'};
mongoose.connect(dbURI, dbOptions);
*/