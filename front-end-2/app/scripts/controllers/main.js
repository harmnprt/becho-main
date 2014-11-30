'use strict';
console.log('main.js');

var app = angular.module('appControllers', []);

app.controller('MainCtrl', ['$scope', '$rootScope', 'Category', 'setLocation', 
  function ($scope, $rootScope, Category, setLocation) {
    $scope.name = 'harman';
    console.log('main.js > MainCtrl');
    $rootScope.categories = Category.query();
    console.log('categories list');
    console.log(Category.query());


    //----------location section--------
    $rootScope.locations_list = setLocation.query();
    console.log(setLocation.query());
    $rootScope.selected_location = 'Your Location';
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
    .controller('MidleCtrl', ['$scope', 
      function($scope){
        $scope.name='new World';
  }])
    .controller('ProductsCtrl', ['$scope', 'sellingItem', function($scope, sellingItem){
      $scope.adds_list = sellingItem.query();
  }])
    .controller('postYourAdds', ['$scope', 'FileUploader', '$http', 'postAddMeth', 
      function ($scope, FileUploader, $http, postAddMeth){

        $scope.userData = {};
        $scope.userData.typeOfAdd = 'iWantToSell';
        $scope.userData.typeOfPrice = 'fixedPrice';
        $scope.userData.privacyOfNumber = 'ShowNumber';
        // console.log($scope.userData.typeOfAdd);
        console.log($scope.userData);

        $scope.postNewAddFunc = function(){
          postAddMeth.post($scope.userData);
          console.log($scope.userData);
        }

        // $scope.queue= [1,2,3,4,5,6];

        // var data = {txt: 'new text'};
        
        // $http.post('/upload', uploader)
        // .success(function(data){
        //   console.log(data + 'success');
        // })
        // .error(function(){
        //   console.log('error occured');
        // });


        var uploader = $scope.uploader = new FileUploader({
          scope: $scope,
          url: '/upload',
          method:'POST',
          alias: 'myfoto',
          formData: [
            {key: 'value'},
            {key2: 'value2'}
          ],
          autoUpload: true,
          queueLimit: 6
        });


        // console.log(uploader);
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

        // FILTERS

        uploader.filters.push({
            name: 'imageFilter',
            fn: function(item /*{File|FileLikeObject}*/, options) {
                var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
        });

        // CALLBACKS

        uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
            console.info('onWhenAddingFileFailed', item, filter, options);
        };
        uploader.onAfterAddingFile = function(fileItem) {
            console.info('onAfterAddingFile', fileItem);
        };
        uploader.onAfterAddingAll = function(addedFileItems) {
            console.info('onAfterAddingAll', addedFileItems);
        };
        uploader.onBeforeUploadItem = function(item) {
            console.info('onBeforeUploadItem', item);
        };
        uploader.onProgressItem = function(fileItem, progress) {
            console.info('onProgressItem', fileItem, progress);
        };
        uploader.onProgressAll = function(progress) {
            console.info('onProgressAll', progress);
        };
        uploader.onSuccessItem = function(fileItem, response, status, headers) {
            console.info('onSuccessItem', fileItem, response, status, headers);
        };
        uploader.onErrorItem = function(fileItem, response, status, headers) {
            console.info('onErrorItem', fileItem, response, status, headers);
        };
        uploader.onCancelItem = function(fileItem, response, status, headers) {
            console.info('onCancelItem', fileItem, response, status, headers);
        };
        uploader.onCompleteItem = function(fileItem, response, status, headers) {
            console.info('onCompleteItem', fileItem, response, status, headers);
        };
        uploader.onCompleteAll = function() {
            console.info('onCompleteAll');
        };

    }])
    .controller('ProductsDetailCtrl', ['$scope', '$routeParams', 'sellingItem',
      function ($scope, $routeParams, sellingItem){
      $scope.productsId = $routeParams.productsId;
      console.log('console output ' + $scope.productsId)
      $scope.newvalue = 'newproduct';
      $scope.phoneDetail = sellingItem.get({addId: $routeParams.productsId});
    }]);
