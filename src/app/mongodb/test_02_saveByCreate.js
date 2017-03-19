/*
注意：每重新运行一次，有写入数据库操作的时候则可能会重复添加数据
*/ 
const db=require("./test_01_connet.js");
const mongoose=require("mongoose");

// 创建实例方法二，更简便
var lolSchema =mongoose.Schema({// 定义表的数据格式，(var lolSchema =new mongoose.Schema({}))也行，mongo中的schema
    name:String,
    position:{type:String,default:"补位"},
    time: {type:Date,default:Date.now}
});
lolSchema.methods.speak = function () {// 定义lolSchema下的collection的公共静态方法
    var greeting = this.time ?
        "loler name is " + this.name :
        "I don't have a name"
    console.log(greeting);
};
var lolModel = mongoose.model('LOL', lolSchema);// sql中LOL为表的名称，默认会小写且自动加s，collections中显示为lols，mongo中的model

lolModel.create({name:"marin",position:"top"}, function (err,doc) {
    if (err){
        console.log(err);
    }else{
        console.log(doc);
    }
});
// lolModel.find({name: "faker"}, function (err, doc) {
//     if (err) return console.error(err);
//     console.log(doc)
// });