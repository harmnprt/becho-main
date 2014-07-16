var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	routes = require('./routes/user.js'),
	multer = require('multer');


//app.configuration(function(){
	//body...
	app.use('/bower_components', express.static(__dirname + '/front-end-2/app/bower_components'));
	app.use('/scripts', express.static(__dirname + '/front-end-2/app/scripts'));
	app.use('/styles', express.static(__dirname + '/front-end-2/app/styles'));
	app.use('/views', express.static(__dirname + '/front-end-2/app/views' ));
	app.use('/product-category', express.static(__dirname + '/front-end-2/app/product-category'))
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

app.listen(8080, function(){
	console.log('server started on port 8080');
});