'use strict';

/* Services */
angular.module('myApp.services', ['ngResource', 'ngCookies']).

  value('version', '0.1').
  
  value('max-lines', '3').

  factory('Phone', ['$resource', function($resource) {
      return $resource('http://localhost:8080/phones/:slug', {slug: '@slug'}, {
    	  query: {
    		  isArray:true,
    		  cache: true
    	  },
    	  get: {
    		  cache: true
    	  }
      });
  }]).
  
  factory('Plan', ['$resource', function($resource) {
      return $resource('http://localhost:8080/plans/:slug', {slug: '@slug'}, {
    	  query: {
    		  isArray:true,
    		  cache: true
    	  },
    	  get: {
    		  cache: true
    	  }
      });
  }]).
  
  factory('Accessory', ['$resource', function($resource) {
      return $resource('http://localhost:8080/accessories/:slug', {slug: '@slug'}, {
    	  query: {
    		  isArray:true,
    		  cache: true
    	  },
    	  get: {
    		  cache: true
    	  }
      });
  }]).
  
  factory('Cart', ['$resource', '$cookieStore', function($resource, $cookieStore) {
	  
	  return {
		  orderId: new Date().getTime(),
		  lines: [],
		  accessories: [],
		  total: 0,
		  tax: {
			   totalTax: 0,
			   slSurchargeTax: 0,
			   slNonServiceTax: 0,
			   e911tax: 0,
			   districtTax: 0
		  }
      };
  }]);
