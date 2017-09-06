/* Directive for books section */

myApp.directive("bookCard",function(){

	return {

	  restrict : "E", // restrict element
	  
	  templateUrl : "./views/books-card.html",
	  
	  scope: false,

	}

});// end book preview card directive

/* Directive for characters section */

myApp.directive("characterCard",function(){

	return {

	  restrict : "E", // restrict element
	  
	  templateUrl : "./views/characters-card.html",
	  
	  scope: false,

	}

});// end character preview card directive

/* Directive for houses section */

myApp.directive("houseCard",function(){

	return {

	  restrict : "E", // restrict element
		
	  templateUrl : "./views/houses-card.html",
      
      scope: false,

	}

});// end houses preview card directive