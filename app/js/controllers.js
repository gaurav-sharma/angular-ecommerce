'use strict';

/* Controllers */
angular.module('myApp.controllers', [])

	.controller('HeaderCtrl', ['$scope', '$location', 'Cart', function($scope, $location, Cart) {
		
		$scope.cart = Cart;
		$scope.isActive = function (viewLocation) { 
	        return viewLocation === $location.path();
	    };
  }])

  .controller('HomeCtrl', ['$scope', 'Cart', function($scope, Cart) {  
	  //TODO
  }])

  .controller('ShopCtrl', ['$scope', function($scope) {
	  //TODO
  }])
  
  .controller('CartCtrl', ['$scope', 'Cart', function($scope, Cart) {
	  $scope.cart = Cart;
  }])
  
  .controller('PhonesCtrl', ['$scope', 'Phone', function($scope, Phone) {
	  $scope.phones = Phone.query();
	  $scope.orderMe = 'price';
  }])
  
  .controller('PhoneDetailsCtrl', ['$scope', '$routeParams', '$location', 'Phone', 'Cart', function($scope, $routeParams, $location, Phone, Cart) {
	  
	  $scope.phone = Phone.get({slug: $routeParams.slug}, function(phone) {});
	  	  
	  $scope.addToCart = function(phone) {
		  Cart.addPhone(phone);
		  $location.path( "/cart" );
	  };
	  
  }])
  
  .controller('PlansCtrl', ['$scope', 'Plan', function($scope, Plan) {
	  $scope.plans = Plan.query();
  }])
  
  .controller('PlanDetailsCtrl', ['$scope', '$routeParams', 'Plan', function($scope, $routeParams, Plan) {
	  $scope.planId = $routeParams.planId;
	  
  }])
  
  .controller('AccessoriesCtrl', ['$scope', 'Accessory', function($scope, Accessory) {
	  $scope.accessories = Accessory.query();
	  $scope.orderMe = 'price';
  }])
  
  .controller('AccessoryDetailsCtrl', ['$scope', '$routeParams', '$location', 'Accessory', 'Cart', function($scope, $routeParams, $location, Accessory, Cart) {
	  
	  $scope.accessory = Accessory.get({slug: $routeParams.slug}, function(accessory) {});
	  
	  $scope.cart = Cart;
	  
	  $scope.addToCart = function(accessory) {
		  Cart.addAccessory(accessory);
		  $location.path( "/cart" );
	  };
	  
  }]);
