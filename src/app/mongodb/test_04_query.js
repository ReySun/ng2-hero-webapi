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

// findOne(查询单条) —— findOne(Conditions,callback);
lolModel.findOne({ age: 22}, function (err, doc){
    // 查询符合age等于100的第一条数据
    console.log(doc)// doc是查询结果
});

// 简单查询 —— 属性过滤 find(Conditions,field,callback);
// field省略或为Null，则返回所有属性。
// 返回只包含name、age两个键的所有记录
// 说明：我们只需要把显示的属性设置为大于零的数就可以，当然1是最好理解的，
// _id是默认返回，如果不要显示加上('_id':0)，
// 但是，对其他不需要显示的属性且不是_id，如果设置为0会报错。
lolModel.find({},{name:1, age:1, _id:0},function(err,docs){
    console.log(docs)//docs 查询结果集
})

//findById(按ID单条数据)，只接收文档的_id作为参数，返回单个文档 ——  findById(_id, callback);
lolModel.findById('58b3a116d1f0111fd82326b4', function (err, doc){
    console.log(doc)//doc 查询结果文档
});

