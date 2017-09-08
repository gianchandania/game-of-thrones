/*Controller for the Single Category View*/

myApp.controller('singleItemController',['$http','$routeParams','gotBooks','gotCharacters','gotHouses','gotWhichCategory','gotDecade','gotDetails','gotPublisher','gotMedia','gotCategory','gotOrder','gotPassItems','gotGender','gotCulture','gotRegion','gotDiedOut', function($http,$routeParams,gotBooks,gotCharacters,gotHouses,gotWhichCategory,gotDecade,gotDetails,gotPublisher,gotMedia,gotCategory,gotOrder,gotPassItems,gotGender,gotCulture,gotRegion,gotDiedOut) { 

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

  this.category;

  this.decade;

  this.author;

  this.publisher;

  this.mediatype;

  this.gender;

  this.culture;

  this.diedout;

  this.region;

  this.transfer;

  this.sort;

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

    main.transfer = "books";
		
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

    // To get data from the main controller and send it back when view is changed in order to maintain the state of the data

    main.decade = gotDecade.getDecade();

    main.publisher = gotPublisher.getPublisher();

    main.mediatype = gotMedia.getMediaType();

    main.author = gotDetails.getAuthor();

    main.category = gotCategory.getCategory();

    gotDecade.setDecade(main.decade);

    gotPublisher.setPublisher(main.publisher);

    gotMedia.setMediaType(main.mediatype);

    gotDetails.setAuthor(main.author);

    gotCategory.setCategory(main.category);

    gotPassItems.setItems(main.transfer);
  
}

  this.loadInfoChar = function() {

    //Get details of characters from the mainController using a service

    main.transfer = "characters";
		
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

   // To get data from the main controller and send it back when view is changed in order to maintain the state of the data

   main.culture = gotCulture.getCulture();

   main.gender = gotGender.getGender();

   main.category = gotCategory.getCategory();

   gotCategory.setCategory(main.category);

   gotGender.setGender(main.gender);

   gotCulture.setCulture(main.culture);

   gotPassItems.setItems(main.transfer);

}
		
    this.loadInfoHouses = function() {

      //Get details of houses from the mainController using a service

      main.transfer = "houses";
	   
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

      // To get data from the main controller and send it back when view is changed in order to maintain the state of the data

      main.category = gotCategory.getCategory();

      gotCategory.setCategory(main.category);

      main.region = gotRegion.getRegion();

      main.diedout = gotDiedOut.getDiedOut();

      gotRegion.setRegion(main.region);

      gotDiedOut.setDiedOut(main.diedout);

      gotPassItems.setItems(main.transfer);
    
  }

}]); // end controller