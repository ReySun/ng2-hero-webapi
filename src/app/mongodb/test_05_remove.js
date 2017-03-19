const db=require("./test_01_connet.js");
const mongoose=require("mongoose");

// 创建实例方法一
var lolSchema = mongoose.Schema({// 定义表的数据格式，mongo中的schema
    name:String,
    position:{type:String,default:"补位"},
    age:Number,
    time: {type:Date,default:Date.now}
});
lolSchema.methods.speak = function () {// 定义lolSchema下的collection的公共静态方法
    var greeting = this.time ?
        "loler name is " + this.name :
        "I don't have a name"
    console.log(greeting);
};
var lolModel = mongoose.model('LOL', lolSchema);// sql中LOL为表的名称，默认会小写且自动加s，collections中显示为lols，mongo中的model



//查找/更新(默认只查找/更新第一个)，但是删除(默认删除全部匹配)


var query = {name:"xx"};
lolModel.remove(query, function (err) {
    if (err){
        console.log(err);
    }else {
        console.log("删除成功");
    }
});
db.createUser({user: "reysun",pwd: "rs",roles:[{role: "userAdminAnyDatabase",db: "mongodb"}]})