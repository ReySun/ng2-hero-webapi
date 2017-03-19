const db=require("./test_01_connet.js");
const mongoose=require("mongoose");

// 创建实例
var heroSchema = mongoose.Schema({// 定义表的数据格式，mongo中的schema
    id:Number,
    name:String,
    time: {type:Date,default:Date.now}
});

// sql中LOL为表的名称
var heroModel = mongoose.model('heroes', heroSchema);

//sql中的column，mongo中的document
// var heroes=[
//     {id: 11, name: 'Mr. Nice'},
//     {id: 12, name: 'Narco'},
//     {id: 13, name: 'Bombasto'},
//     {id: 14, name: 'Celeritas'},
//     {id: 15, name: 'Magneta'},
//     {id: 16, name: 'RubberMan'},
//     {id: 17, name: 'Dynama'},
//     {id: 18, name: 'Dr IQ'},
//     {id: 19, name: 'Magma'},
//     {id: 20, name: 'Tornado'}
// ]
// for(let i=0;i<heroes.length;i++){
//     let hero = new heroModel(heroes[i]);
//     hero.save();
// }
heroModel.find({},{name:1, id:1, _id:0},function(err,docs){
    console.log(docs)//docs 查询结果集
    var heroes=docs
})
