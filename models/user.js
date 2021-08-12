const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: 
	{ 
		type : String, min: [4, 'Too short, min is 4 characters'], max: [32, 'Too long, max is 32 characters'],
    required:true
	},

  email: { 
      type : String, min: [4, 'Too short, min is 4 characters'], max: [32, 'Too long, max is 32 characters'],
      unique : true, lowercase : true, required : 'Email is Required', match : [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
  },

  telephone: {
    type: Number,
    required:true,
  },

	password: 
	{ 
		type : String, min: [4, 'Too short, min is 4 characters'], max: [32, 'Too long, max is 32 characters'], required : 'Password is Required'
	},

});


module.exports = User = mongoose.model("users", userSchema);


