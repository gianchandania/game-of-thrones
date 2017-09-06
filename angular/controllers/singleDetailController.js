/*Controller for the Single Category View*/

myApp.controller('singleItemController',['$http','$routeParams','gotBooks','gotCharacters','gotHouses','gotWhichCategory', function($http,$routeParams,gotBooks,gotCharacters,gotHouses,gotWhichCategory) { 

//create a context
	var main = this;
  	
  this.bookDetails = {};
	
	this.charDetails = {};
	
	this.houseDetails = {};

  this.characters = [];

  this.povcharacters = [];

  this.povBooks = [];

  this.books = [];

  this.father;

  this.mother;

  this.spouse;

  this.allegiance = [];

  this.currentlord;

  this.heir;

  this.overlord;

  this.founder;

  this.cadetbranches = [];

  this.swornmembers = []; 

  this.showDiv = false;

  this.clickOnMore = function() {
      
    this.showDiv = true;
    
  }

  this.clickOnLess = function() {
    
    this.showDiv = false;
    
  }

  this.callType = gotWhichCategory.getWhichCategory();

  console.log(this.callType);
  	
  this.loadInfoBooks = function() {

		//Get details of books from the mainController using a service
		
    main.bookDetails =  gotBooks.getBooks();
  
    if (main.bookDetails.characters != "") {
    	
      angular.forEach(main.bookDetails.characters, function(value,key){

    		angular.forEach(main.bookDetails.characterList, function(value1,key1){

    			if (main.bookDetails.characters[key] == main.bookDetails.characterList[key1].url) {
    	
      			(main.bookDetails.characterList[key1].name != '')?main.characters.push(main.bookDetails.characterList[key1].name):main.characters.push(main.bookDetails.characterList[key1].aliases[0]);

    			}
    		
			  });

    	});

    }

    if (main.bookDetails.povCharacters != "") {

      angular.forEach(main.bookDetails.povCharacters, function(value,key){

        angular.forEach(main.bookDetails.characterList, function(value1,key1){

          if (main.bookDetails.povCharacters[key] == main.bookDetails.characterList[key1].url) {

            (main.bookDetails.characterList[key1].name != '')?main.povcharacters.push(main.bookDetails.characterList[key1].name):main.characters.push(main.bookDetails.characterList[key1].aliases[0]);

          }
        
        });

      });

    }

  }

  this.loadInfoChar = function() {
		
		main.charDetails = gotCharacters.getCharacters();

    if(main.charDetails.books != "") {
      
      angular.forEach(main.charDetails.books, function(value,key){

        angular.forEach(main.charDetails.bookList, function(value1,key1){

          if (main.charDetails.books[key] == main.charDetails.bookList[key1].url) {
      
            main.books.push(main.charDetails.bookList[key1].name);

          }
        
        });

      });
    }

    if(main.charDetails.povBooks != "") {
      
      angular.forEach(main.charDetails.povBooks, function(value,key){

        angular.forEach(main.charDetails.bookList, function(value1,key1){

          if (main.charDetails.povBooks[key] == main.charDetails.bookList[key1].url) {
      
            main.povBooks.push(main.charDetails.bookList[key1].name);

          }
        
        });

      });
    
    }

    if(main.charDetails.allegiances != "") {
    
      angular.forEach(main.charDetails.allegiances, function(value,key){

        angular.forEach(main.charDetails.houseList, function(value1,key1){

          if (main.charDetails.allegiances[key] == main.charDetails.houseList[key1].url) {
            main.allegiance.push(main.charDetails.houseList[key1].name);

          }
        
        });

      });
    }

   angular.forEach(main.charDetails.characterList, function(value1,key1){

      if (main.charDetails.father != "" && main.charDetails.father == main.charDetails.characterList[key1].url) {
            
        main.father = main.charDetails.characterList[key1].name;

      }

      if (main.charDetails.mother != "" && main.charDetails.mother == main.charDetails.characterList[key1].url) {
            
        main.mother = main.charDetails.characterList[key1].name;

      }

      if (main.charDetails.spouse != "" && main.charDetails.spouse == main.charDetails.characterList[key1].url) {
            
        main.spouse = main.charDetails.characterList[key1].name;

      }

    });

  }
		
    this.loadInfoHouses = function() {
	   
     	main.houseDetails = gotHouses.getHouses();

      if (main.houseDetails.cadetBranches != "") {
		    
        angular.forEach(main.houseDetails.cadetBranches, function(value,key){

    		  angular.forEach(main.houseDetails.houseList, function(value1,key1){

    			 if (main.houseDetails.cadetBranches[key] == main.houseDetails.houseList[key1].url) {
    			     
               main.cadetbranches.push(main.houseDetails.houseList[key1].name);

    			  }
    		
			   });

        });

      }

      if (main.houseDetails.swornMembers != "") {
        
        angular.forEach(main.houseDetails.swornMembers, function(value,key){

          angular.forEach(main.houseDetails.characterList, function(value1,key1){

            if (main.houseDetails.swornMembers[key] == main.houseDetails.characterList[key1].url) {
            
               main.swornmembers.push(main.houseDetails.characterList[key1].name);

            }
        
          });

        });

      }

      angular.forEach(main.houseDetails.characterList, function(value1,key1){      

        if (main.houseDetails.currentLord != "" && main.houseDetails.currentLord == main.houseDetails.characterList[key1].url) {
            
           main.currentlord = main.houseDetails.characterList[key1].name;
          
        }

        if (main.houseDetails.heir != "" && main.houseDetails.heir == main.houseDetails.characterList[key1].url) {
             
           main.heir = main.houseDetails.characterList[key1].name;
          
        }

        if (main.houseDetails.founder != "" && main.houseDetails.founder == main.houseDetails.characterList[key1].url) {
             
           main.founder = main.houseDetails.characterList[key1].name;
          
        }

      });

      angular.forEach(main.houseDetails.houseList, function(value,key){   
      
        if (main.houseDetails.overlord != "" && main.houseDetails.overlord == main.houseDetails.houseList[key].url) {
           
           main.overlord = main.houseDetails.houseList[key].name;
        
        }

      });
    
  }

}]); // end controller