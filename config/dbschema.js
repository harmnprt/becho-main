var mongoose = require('mongoose');

exports.mongoose = mongoose;

//Database Connect

var uristring =
	process.env.MONGOLAB_URI ||
	process.env.MONGOHQ_URL ||
	'mongodb://localhost/ProjectOzz';

var mongoOptions = { db: {safe: true }};
mongoose.connect(uristring, mongoOptions, function (err, res) {
	// body...
	if(err){
		console.log('Error Connecting to '+ uristring + '. ' + err);
	} else {
		console.log('Successfull connected to: ' + uristring);
	}
});

//******* Database schema ******************

var Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

//User Schema
var newAddSchema = new Schema ({
		// *************  open from this 
	// type_of_add: {type:String, required:true, unique:false},
	// category_name: {type: String, required: true, unique: false},
	// sub_category:{type:String, required:true, unique:false},

	// add_title: {type:String, required:true, unique:false},
	// type: {type:String, required:false, unique:false},
	// // sub_type: {type:String, required:false, unique:false},
	// discription: {type:String, required:true, unique:false},
	// type_of_price: {type:String, required:true, unique:false},
	// price: {type:Number, required:false, unique:false},
	// tag: {type:String, required:false, unique:false},

	// //Seller infromation
	// name_of_seller: {type:String, required:true, unique:false},
	// email:{type:String, required:false, unique:false},
	// number:{type:Number, required:true, unique:false},
	// privacy_of_number:{type:String, required:true, unique:false},
	// state: {type:String, required:true, unique:false},
	// city_name: {type:String, required:true, unique:false},
	// locality: {type:String, required:false, unique:false},
	// remember:{type:Boolean, required:true}

	// ***************  to this
});

var addModel = mongoose.model('mobile', newAddSchema);
exports.addModel = addModel;

//-------------------------------------------------------------------
// For Add new Adv

// var user = new addModel({
// 	category: 'hello'
// })
// user.save(function(err, data){
// 	console.log(data)
// })

function newAdd(req, res){

	console.log(req.body);
			//***************** from this 
	// var type_of_add = req.body.typeOfAdd,
	// 	type_of_price = req.body.typeOfPrice,
	// 	privacy_of_number= req.body.privacyOfNumber,
	// 	category_name = req.body.categoryName,
	// 	sub_category = req.body.subCategory,
	// 	add_title = req.body.addTitle,
	// 	type = req.body.type,
	// 	discription = req.body.discription,
	// 	price = req.body.price,
	// 	name_of_seller = req.body.nameOfSeller,
	// 	email = req.body.email,
	// 	number = req.body.number,
	// 	state = req.body.state.state,
	// 	city_name = req.body.cityName,
	// 	locality = req.body.locality,
	// 	tag	= req.body.tag,
	// 	remember = req.body.remember;

	// console.log(privacy_of_number)
	// console.log('DATABASE and name');
	// var user = new addModel({
	// 	type_of_add: type_of_add,
	// 	category_name: category_name,
	// 	sub_category: sub_category,
	// 	add_title: add_title,
	// 	type: type,
	// 	discription: discription,
	// 	type_of_price: type_of_price,
	// 	price: price,
	// 	tag: tag,

	// 	name_of_seller: name_of_seller,
	// 	email: email,
	// 	number: number,
	// 	privacy_of_number: privacy_of_number,
	// 	state: state,
	// 	city_name: city_name,
	// 	locality: locality,
	// 	remember: remember
	// });
	// user.save(function(err, data){
	// 	console.log('Database: new user of data: '+ data + 'added into database');
	// });
	// *********************** to this
	console.log('completing dbschema');
	res.write('this');
	res.end();
}
exports.newAdd = newAdd;

//------------------------------------------------------------------
