'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl', title: 'Home'});
  $routeProvider.when('/shop', {templateUrl: 'partials/shop.html', controller: 'ShopCtrl', title: 'Shop'});
  $routeProvider.when('/cart', {templateUrl: 'partials/cart.html', controller: 'CartCtrl', title: 'Cart'});
  
  $routeProvider.when('/phones', {templateUrl: 'partials/phones.html', controller: 'PhonesCtrl', title: 'Phones'});
  $routeProvider.when('/phones/:slug', {templateUrl: 'partials/phone-details.html', controller: 'PhoneDetailsCtrl', title: 'Phone Details'});
  
  $routeProvider.when('/plans', {templateUrl: 'partials/plans.html', controller: 'PlansCtrl',  title: 'Plans'});
  $routeProvider.when('/plans/:slug', {templateUrl: 'partials/plan-details.html', controller: 'PlanDetailsCtrl', title: 'Plan Details'});
  
  $routeProvider.when('/accessories', {templateUrl: 'partials/accessories.html', controller: 'AccessoriesCtrl',  title: 'Accessories'});
  $routeProvider.when('/accessories/:slug', {templateUrl: 'partials/accessory-details.html', controller: 'AccessoryDetailsCtrl', title: 'Accessory Details'});
  
  $routeProvider.otherwise({redirectTo: '/home'});
  
}]).
run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);
