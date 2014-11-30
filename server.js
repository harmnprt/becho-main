var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	routes = require('./routes/user.js'),
	multer = require('multer'),
	userData = require('./config/dbschema.js');


//app.configuration(function(){
	//body...
	app.use('/bower_components', express.static(__dirname + '/front-end-2/app/bower_components'));
	app.use('/scripts', express.static(__dirname + '/front-end-2/app/scripts'));
	app.use('/styles', express.static(__dirname + '/front-end-2/app/styles'));
	app.use('/views', express.static(__dirname + '/front-end-2/app/views' ));
	app.use('/product-category', express.static(__dirname + '/front-end-2/app/product-category'))
	app.use('/img', express.static(__dirname+ '/front-end-2/app/img'));
	app.use(bodyParser.json());
	var multer1 = multer({
						dest: './images',
						
						rename: function(fieldname, filename){
							return fieldname + '-' +filename+ '-'+ Date.now()
						},
						limits: {
							fieldNameSize: 100,
							files: 12,
							fields: 3,
							headerPairs: 1
						},
						onFileUploadStart: function(file){
							console.log(file.fieldname + ' is starting');
						},
						onFileUploadData: function(file, data){
							console.log(data.length + ' of ' + file.fieldname + ' arrived.');
						},
						onFileUploadComplete: function(file){
							console.log(file.fieldname + ' uploaded to ' + file.path);
						},
						onParseStart: function(){
							console.log('Form Parsing started at: ' + new Date());
						},
						onParseEnd: function(req, next){
							console.log('Form Parsing completed at: ' + new Date());
							next();
						},
						onError: function(error, next){
							console.log(error + ' this error occured');
							next();
						},
						onFieldLimit: function(){
							console.log('Crossed field Limit.');
						},
						onPartsLimit: function(){
							console.log('Crossed parts limit!');
						}
					});
	// app.use(bodyParser());
	// app.use(bodyParser.json({type: 'application/vnd.api+json'}));
//});

// app.get('/views/main.html', function(req, res){
// 	res.sendfile(__dirname + '/front-end-2/app/views/main.html');
// });

// app.get('/views/products', function(req, res){
// 	res.sendfile(__dirname + '/front-end-2/app/views/products.html');
// });

app.get('/', function(req, res){
	res.sendfile(__dirname + '/front-end-2/app/index.html');
});
app.get('/product-category/category.json', function(req, res){
	res.sendfile(__dirname + '/front-end-2/app/product-category/category.json');
})
app.get('/adds-list-item/adds-list.json', function(req, res){
	res.sendfile(__dirname + '/front-end-2/app/adds-list-item/adds-list.json')
});
app.get('/adds-list-item/productsId', function(req, res){
	res.sendfile(__dirname + '/front-end-2/app/adds-list-item/add-detail.json');
});
app.get('/setLocation/city_list.json', function (req, res) {
	res.sendfile(__dirname + '/front-end-2/app/dataBase/location/city_list.json');
});
app.post('/postNewAdd', userData.newAdd);
app.post('/upload', multer1,function(req, res){
	console.log('inside upload');
	res.send('end2')
})

app.listen(8080, function(){
	console.log('server started on port 8080');
});