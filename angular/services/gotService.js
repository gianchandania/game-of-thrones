// using service method 
// In this method, you will be provided with an instance of the functions
// this object instance becomes the service object that AngularJS registers
// and injects later to other services and controller if required

myApp.service('GotService',function($http,$cacheFactory){

	var main = this;
	
	this.baseUrl = 'https://www.anapioficeandfire.com/api';

	var totalCharacters = 10;
	
	var totalHouses = 9;
	
	var count = 0;
	
	var count1 = 0;
	
	this.getAllBooks = function(){

		var $httpDefaultCache = $cacheFactory.get('$http');

		var cachedData = $httpDefaultCache.get(main.baseUrl+'/books?page=1&pageSize=50');

		return $http.get(main.baseUrl+'/books?page=1&pageSize=50',{ cache: true});

	}// end get All Books

	this.getAllCharacters = function(index){

		return $http.get(main.baseUrl+'/characters?page='+index+'&pageSize=50',{ cache: true});

	}// end get All Characters

	this.getAllHouses = function(index1){
	
		return $http.get(main.baseUrl+'/houses?page='+index1+'&pageSize=50',{ cache: true});
		
	}// end get All Houses 

});//end service 