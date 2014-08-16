'use strict';
console.log('main.js');

var app = angular.module('appControllers', []);

app.controller('MainCtrl', ['$scope', '$rootScope', 'setLocation', 
  function ($scope, $rootScope, setLocation) {
    $scope.name = 'harman';
    console.log('main.js > MainCtrl');
    $rootScope.locations_list = setLocation.query();
    console.log(setLocation.query());
    $rootScope.selected_location = 'Chose your Location';
    $scope.setLocation_state_func = function (selected_location) {
          $rootScope.selected_location = selected_location.state;
          console.log(selected_location);
        }
    $scope.setLocation_city_func = function (selected_location) {
          $rootScope.selected_location = selected_location;
          console.log(selected_location);
        }
    $scope.find_state_func = function(states){
          $rootScope.selected_state = states.state;
          console.log(states.state);
    };
    $rootScope.orderPro = 'popular_cities';

  }])
    .controller('MidleCtrl', ['$scope','Category', 'setLocation', 
      function($scope, Category, setLocation){
        $scope.categories = Category.query();
        console.log('categories list');
        console.log(Category.query());
        $scope.name='new World';
  }])
    .controller('ProductsCtrl', ['$scope', 'sellingItem', function($scope, sellingItem){
      $scope.adds_list = sellingItem.query();
  }])
    .controller('postYourAdds', ['$scope', 'Category','$fileUploader', '$http', 
      function ($scope, Category, $fileUploader, $http){
        $scope.categories = Category.query();
        $scope.queue= [1,2,3,4,5,6]
        var data = {txt: 'new text'}
        $http.post('/this', data)
        .success(function(data){
          console.log(data + success);
        })
        .error(function(){
          console.log('error occured');
        });

        console.log($fileUploader);
        var uploader = $scope.uploader = $fileUploader.create({
          scope: $scope,
          url: '/upload',
          alias: 'myfoto',
          formData: [
            {key: 'value'},
            {key2: 'value2'}
          ],
          filters: [
            function() {                    // A user-defined filter
              console.info('filter1');
              return true;
            }
          ],
          queueLimit: 12
        });

        uploader.filters.push(function (item){
          var type = uploader.isHTML5 ? item.type : '/' + item.value.slice(item.value.lastIndexOf('.'));
          type = '|' + type.toLowerCase().slice(type.lastIndexOf('/') + 1) + '|';
          return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        });




        // var item = {

        //   file: {
        //     name: 'pehly he add c bhai jeh to',
        //     size: 1e6
        //   },
        //   progress: 100,
        //   isUploaded: true,
        //   isSuccess: true
        // };

        // item.remove = function(){
        //   uploader.removeFromQueue(this);
        // };

        // uploader.queue.push(item);
        // uploader.progress = 100;

        //ADDING FILTERS

        uploader.filters.push(function(){
          console.info('filters2');
          return true;
        });

        // REGISTER HANDLERS

        uploader.bind('afteraddingfile', function (event, item){
          console.info('After Adding a file', item);
        });

        uploader.bind('whenaddingfilefailed', function (event, item){
          console.info('When adding a File failed', item);
        });

        uploader.bind('afteraddingall', function (event, items){
          console.info('After adding all files', items);
        });

        uploader.bind('beforeupload', function (event, items){
          console.info('Befor Upload', items);
        });

        uploader.bind('progress', function (event, item, progress){
          console.info('Progress' + progress, item);
        });

        uploader.bind('success', function (event, xhr, item, response){
          console.info('Success', xhr, item, response);
        });

        uploader.bind('cancel', function (event, xhr, item){
          console.info('Cancel', xhr, item);
        });

        uploader.bind('error', function (event, xhr, item, response){
          console.info('Error', xhr, item, response);
        });

        uploader.bind('complete', function (event, xhr, item, response){
          console.info('Complete', xhr, item, response);
        });

        uploader.bind('progressall', function (event, progress){
          console.info('Total Progrss' + progress);
        });

        uploader.bind('completeall', function (event, items){
          console.info('Complete all', items);
        });

    }])
    .controller('ProductsDetailCtrl', ['$scope', '$routeParams', 'sellingItem',
      function ($scope, $routeParams, sellingItem){
      $scope.productsId = $routeParams.productsId;
      console.log('console output ' + $scope.productsId)
      $scope.newvalue = 'newproduct';
      $scope.phoneDetail = sellingItem.get({addId: $routeParams.productsId});
    }]);
