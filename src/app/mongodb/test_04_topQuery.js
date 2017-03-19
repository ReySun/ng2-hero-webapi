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

/*
高级查询
*/
// 大于$gt
lolModel.find({'age':{'$gt':23}},{sort:{age:1}},function (err,doc) {
    console.log("大于23岁的有：");
    console.log(doc);
});

// 小于$lt
lolModel.find({'age':{'$lt':23}}, function (err,doc) {
    console.log("小于23岁的有：");
    console.log(doc);
});

// 不等于$ne
lolModel.find({'age':{'$ne':22}}, function (err,doc) {
    console.log("不等于22岁的有：");
    console.log(doc);
})

// 并$or
lolModel.find({"$or":[{"name":"faker"},{"age":25}]},function(error,docs){
    console.log("名字是faker或者年龄为25的是：")
});

// 是否存在$exists
lolModel.find({name: {$exists: true}},function(error,docs){
    //查询所有存在name属性的文档
});
lolModel.find({email: {$exists: false}},function(error,docs){
    //查询所有不存在email属性的文档
});

// 限制数量limit
lolModel.find({},null,{limit:2},function(err,docs){
    console.log("限制2条查询数量");
    console.log(docs);//如果匹配的结果不到20个，则返回匹配数量的结果，也就是说limit函数指定的是上限而非下限。
});
// 跳过数量skip
lolModel.find({},null,{skip:2},function(err,docs){
    //如果查询结果数量中少于4个的话，则不会返回任何结果
    console.log("跳过2条记录的结果是：");
    console.log(docs);//skip函数的功能是略过指定数量的匹配结果，返回余下的查询结果
});
// 结果排序sort
lolModel.find({},null,{sort:{age:-1}},function(err,docs){
    //sort函数可以将查询结果数据进行排序操作，该函数的参数是一个或多个键/值对，
    //键代表要排序的键名，值代表排序的方向，1是升序，-1是降序。
    //查询所有数据，并按照age降序顺序返回数据docs
    console.log("按age降序排序结果是：");
    console.log(docs);
});