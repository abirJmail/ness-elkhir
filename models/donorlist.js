const mongoose=require("mongoose")
const schema = mongoose.Schema

const list = new schema({
    name : {type : String, required:true},
    gender: {type : String, required:true},
    age: {type : Number},
    bloodgroup: {type : String, required:true},
    phone : {type : Number ,  unique : true, required:true , validate: { validator: function(arr) { return arr.length =8  }}},
    state : {type : String, required:true},
    city : {type : String, required:true},
});


module.exports = List = mongoose.model("list", list)