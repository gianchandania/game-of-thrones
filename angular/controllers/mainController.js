/*Controller for the First View with all the Categories*/

myApp.controller('mainController',['GotService','$routeParams','$location','gotDetails','gotPublisher','gotMedia','gotDecade','gotGender','gotCulture','gotRegion','gotDiedOut','gotCategory','gotBooks','gotCharacters','gotHouses','gotWhichCategory','gotPassItems','$q', function(GotService,$routeParams,$location,gotDetails,gotPublisher,gotMedia,gotDecade,gotGender,gotCulture,gotRegion,gotDiedOut,gotCategory,gotBooks,gotCharacters,gotHouses,gotWhichCategory,gotPassItems,$q) { 

//create a context
  var main = this;

  this.viewChange = "";

  this.totalCharacter = 43;
    
  this.totalHouse = 9;
    
  this.allItems = [];
    
  this.details = [];
    
  this.bookDetails = [];
    
  this.characterDetails = [];
   
  this.houseDetails = [];
    
  this.charmodel = "All Categories";
    
  this.sort = "Forward";

  this.countchar = 0;

  this.counthouse = 0
  
/* Set default values of all the filters with the help of service */

  //Author Filter
  
  this.authors = ["All Authors"];

  this.author = this.authors[0];
    
  //Publisher Filter
  
  this.publishers = ["All Publishers"];

  this.publish = this.publishers[0];

  //MediaType Filter
  
  this.mediatypes = ["All MediaTypes"];

  this.mediatype = this.mediatypes[0];

  //Decade Filter
  
  this.alldecades = ["All Decades", "Books of decade 1990's", "Books of decade 2000's", "Books of decade 2010's"];

  this.decade = this.alldecades[0];
  
  //Gender Filter
  
  this.allgenders = ["All Genders"];

  this.gender = this.allgenders[0];
  
  //Culture Filter
  
  this.allcultures = ["All Cultures"];

  this.culture = this.allcultures[0];
    
  //Region Filter
  
  this.allregions = ["All Regions"];

  this.region = this.allregions[0];

  //Died Out Houses Filter
  
  this.diedOutHouses = ["All Houses", "Houses Died Out", "Houses Not Died Out"];

  this.died = this.diedOutHouses[0];

  //Variable to see if the view has been changed

  main.viewChange = gotPassItems.getItems();

  console.log(main.viewChange);

  if (main.viewChange == null){
    
    gotDetails.setAuthor(this.author);
      
    gotPublisher.setPublisher(this.publish);
      
    gotMedia.setMediaType(this.mediatype);
      
    gotDecade.setDecade(this.decade);
      
    gotGender.setGender(this.gender);
    
    gotCulture.setCulture(this.culture);

    gotRegion.setRegion(this.region);

    gotDiedOut.setDiedOut(this.died);

  }

  this.allBookDetails = {};
  
  this.allCharDetails = {};
  
  this.allHouseDetails = {};
    
  this.itemUrl;
    
  this.itemName;

  this.hideloader = true;

  this.showFilter = false;

  this.whichCall;

/* Function to sort the books and houses in forward order */

  this.compareFunction = function(a,b) {
        
        const itemA = a.name.toUpperCase();
        
        const itemB = b.name.toUpperCase();

        let comparison = 0;
        
          if (itemA > itemB) {
        
            comparison = 1;
        
          } else if (itemA < itemB) {
        
            comparison = -1;
        
          }
        
          return comparison;
  
  }

/* Function to sort the books and houses in reverse order */

  this.compareReverse = function(a,b) {
       
        const itemA = a.name.toUpperCase();
       
        const itemB = b.name.toUpperCase();

        let comparison = 0;
       
          if (itemA > itemB) {
       
            comparison = -1;
       
          } else if (itemA < itemB) {
       
            comparison = 1;
       
          }
      
          return comparison;
  
  }

/* Function to sort the characters in forward order */

  this.comparecharFunction = function(a,b) {
        
        var charA = a.name.toUpperCase();
        
        var charB = b.name.toUpperCase();
        
        const charAliasA = a.aliases[0].toUpperCase();
        
        const charAliasB = b.aliases[0].toUpperCase();

        if (charA == "") {
        
            charA = charAliasA;
        
        }

        if (charB == ""){
        
            charB = charAliasB;
        
        }
        
        let comparison = 0;
      
        if (charA > charB) {
      
            comparison = 1;
      
         } else if (charA < charB) {
      
            comparison = -1;
      
          }
      
        return comparison;
    
    }

/* Function to sort the characters in reverse order */

    this.comparecharReverse = function(a,b) {

        var charA = a.name.toUpperCase();

        var charB = b.name.toUpperCase();

        const charAliasA = a.aliases[0].toUpperCase();

        const charAliasB = b.aliases[0].toUpperCase();

        if (charA == "") {

            charA = charAliasA;

        }

        if (charB == ""){

            charB = charAliasB;

        }

        let comparison = 0;
                
        if (charA > charB) {
        
            comparison = -1;
        
        } 

        else if (charA < charB) {
        
            comparison = 1;
        
        }
        
        return comparison;
      
    }

/* Function to gather data from the api and storing them in arrays */

	this.loadDetails = function() {

      var deferred = $q.defer();    
    
/* Service call to get data about books from api */

      GotService.getAllBooks().
		  
        then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
           
          deferred.resolve(response);
          
          //Storing details of books in the array

          main.bookDetails = response.data;
          
          //Sorting the books array      
          
          main.bookDetails.sort(main.compareFunction);

          gotBooks.setBooks(main.bookDetails);
            
          return deferred.promise;
                
        }, function errorCallback(response) {
                
          // called asynchronously if an error occurs
          // or server returns response with an error status.
                
            alert("1some error occurred. Check the console.");
                
            deferred.reject(response);
            
            $location.path('/error');

        });

/* Running a for loop to get data from multiple apis of characters */

      for(this.i = 1; this.i <= this.totalCharacter; this.i++){

/* Service call to get data about characters from api */
       
        main.countchar++;
       	
        GotService.getAllCharacters(this.i).
      
      		then(function successCallback(response) {
                
            // this callback will be called asynchronously
            // when the response is available
                
            deferred.resolve(response);
                
            if(response.data.length > 0) {
               
                angular.forEach(response.data,function(value,key) {
          
                  main.characterDetails.push(response.data[key]);
                
                  return deferred.promise;
           
                });

                main.characterDetails.sort(main.comparecharFunction);

                 gotCharacters.setCharacters(main.characterDetails);
            
            }

          }, function errorCallback(response) {
                
            // called asynchronously if an error occurs
            // or server returns response with an error status.
             alert("2some error occurred. Check the console.");
                
              deferred.reject(response);
              
              $location.path('/error');

          });

      }

/* Running a for loop to get data from multiple apis of houses */

    for(this.j = 1; this.j <= this.totalHouse; this.j++){

/* Service call to get data about houses from api */
	     main.counthouse++;
      
       GotService.getAllHouses(this.j).
       
        then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
          
          deferred.resolve(response);

          if(response.data.length > 0) {
                    
              angular.forEach(response.data,function(value,key) {
                
                main.houseDetails.push(response.data[key]);
                
                return deferred.promise;

              });
              
               main.houseDetails.sort(main.compareFunction); 

               gotHouses.setHouses(main.houseDetails);       
          
          }
                    
        }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            alert("3some error occurred. Check the console.");
               
            deferred.reject(response);
                
            $location.path('/error');

        });
    }

/* Use promises in order to accumulate all the arrays in one single array after the responses are fetched */

  let promises = [GotService.getAllBooks(),GotService.getAllCharacters(),GotService.getAllHouses()];

  $q.all(promises).then(main.callAtTimeout);
  
};

/* Function to collect data in single filter */

this.callAtTimeout = function() {
    
    console.log(main.counthouse);
    
    console.log(main.countchar);
    
    console.log("Responses are gathered");

    main.allItems = [];
        
    main.allItems.push("BOOKS");
        
    angular.forEach(main.bookDetails,function(value,key){
            
      angular.forEach(main.bookDetails[key].authors,function(value1,key1){
    
      //Gather data about authors in array to implement the filters

        if(main.authors.indexOf(main.bookDetails[key].authors[key1]) === -1){
                 
          main.authors.push(main.bookDetails[key].authors[key1]);

        }

      });  

      //Gather data about publishers in array to implement the filters

        if(main.publishers.indexOf(main.bookDetails[key].publisher) === -1){
                 
          main.publishers.push(main.bookDetails[key].publisher);
        
        }   

      //Gather data about mediatypes in array to implement the filters

        if(main.mediatypes.indexOf(main.bookDetails[key].mediaType) === -1){
                 
          main.mediatypes.push(main.bookDetails[key].mediaType);
        
        }   
 
      //Put details of all books in array in the array

        if(main.allItems.indexOf(main.bookDetails[key]) === -1){
      
          main.allItems.push(main.bookDetails[key])
      
        }
             
    });

if (main.countchar >= 43) {
       
    main.allItems.push("CHARACTERS");
        
    angular.forEach(main.characterDetails,function(value,key){
      
      //Gather data about genders of characters in array to implement the filters 

      if(main.allgenders.indexOf(main.characterDetails[key].gender) === -1){
                 
        main.allgenders.push(main.characterDetails[key].gender);
      
      }   
      
      //Gather data about cultures of characters in array to implement the filters

      if(main.allcultures.indexOf(main.characterDetails[key].culture) === -1){
                 
        (main.characterDetails[key].culture != '')?(main.allcultures.push(main.characterDetails[key].culture)):'';
      
      }   
      
      if(main.allItems.indexOf(main.characterDetails[key]) === -1){
      
        main.allItems.push(main.characterDetails[key]);
      
      }
      
            
    });

  }

  if (main.counthouse >= 9) {
 
    main.allItems.push("HOUSES");
        
    angular.forEach(main.houseDetails,function(value,key){
      
	  //Gather data about regions of houses in array to implement the filters
	  
      if(main.allregions.indexOf(main.houseDetails[key].region) === -1){
                 
        (main.houseDetails[key].region != "")?(main.allregions.push(main.houseDetails[key].region)):'';
      
      } 

      if(main.allItems.indexOf(main.houseDetails[key]) === -1){

         main.allItems.push(main.houseDetails[key]);
      
         
      } 

    });

  }

	//Hide the loader after the content of page is loaded
         
	main.hideloader = false;
         
	main.showFilter = true;
    
  console.log(main.allItems);

  //If view is changed from the Single Category view for Books to All Categories View, then state of the data is maintained

  if (main.viewChange == "books") {

    main.author = gotDetails.getAuthor();

    main.publish = gotPublisher.getPublisher();

    main.mediatype = gotMedia.getMediaType();

    main.decade = gotDecade.getDecade();

    main.charmodel = gotCategory.getCategory();

    main.checkCategory(main.charmodel);

    main.checkAuthor(main.author);
        
    main.checkPublisher(main.publish);
        
    main.checkDecade(main.decade);
        
    main.checkMediaType(main.mediatype);

  }

  //If view is changed from the Single Category view for Characters to All Categories View, then state of the data is maintained

  if (main.viewChange == "characters") {
  
    main.charmodel = gotCategory.getCategory();

    main.checkCategory(main.charmodel);

    main.gender = gotGender.getGender();

    main.culture = gotCulture.getCulture();

    main.checkGender(main.gender);
        
    main.checkCulture(main.culture);
  
  }

  //If view is changed from the Single Category view for Houses to All Categories View, then state of the data is maintained


  if (main.viewChange == "houses") {
  
    main.charmodel = gotCategory.getCategory();

    main.checkCategory(main.charmodel);

    main.region = gotRegion.getRegion();

    main.checkRegion(main.region);

    main.died = gotDiedOut.getDiedOut();

    main.checkDiedOut(main.died);

  }

}

/* Function to check the status of Sort filter and display data accordingly in forward or reverse order*/

this.checkOrder = function(sortTemp) {
       
  if (sortTemp == "Forward") {
    
    main.bookDetails.sort(main.compareFunction);

    main.characterDetails.sort(main.comparecharFunction);

    main.houseDetails.sort(main.compareFunction);   
  
  }
            
  else {
    
    main.bookDetails.sort(main.compareReverse);

    main.characterDetails.sort(main.comparecharReverse);

    main.houseDetails.sort(main.compareReverse);
  
  
  }
  
/* Function call to show data after sorting */

  main.callAtTimeout();

};

//Check if the filter for authors is changed, if changed then filter the data accordingly

this.checkAuthor = function(currentAuthor) {
        
  gotDetails.setAuthor(currentAuthor);
     
};

//Check if the filter for publishers is changed, if changed then filter the data accordingly

this.checkPublisher = function(currentPublisher) {
        
  gotPublisher.setPublisher(currentPublisher);

};

//Check if the filter for mediatypes is changed, if changed then filter the data accordingly

this.checkMediaType = function(currentMediaType) {
        
  gotMedia.setMediaType(currentMediaType);
     
};

//Check if the filter for decades is changed, if changed then filter the data accordingly

this.checkDecade = function(currentDecade) {
        
  gotDecade.setDecade(currentDecade);
     
};

//Check if the filter for genders is changed, if changed then filter the data accordingly

this.checkGender = function(currentGender) {
      
  gotGender.setGender(currentGender);
     
};

//Check if the filter for cultures is changed, if changed then filter the data accordingly

this.checkCulture = function(currentCulture) {
        
  gotCulture.setCulture(currentCulture);
     
};

//Check if the filter for regions is changed, if changed then filter the data accordingly

this.checkRegion = function(currentRegion) {
        
  gotRegion.setRegion(currentRegion);
     
}

//Check if the filter for died out houses is changed, if changed then filter the data accordingly

this.checkDiedOut = function(currentDiedOut) {
    
  gotDiedOut.setDiedOut(currentDiedOut);
     
}

/* Show the data based on Filter by Category */

this.checkCategory = function(currentCategory) {
        
  gotCategory.setCategory(currentCategory);

  if (currentCategory == "All Categories") {

    console.log("This is All Categories.");

    main.gender = "All Genders";
        
    main.culture = "All Cultures";
       
    main.checkGender(main.gender);
        
    main.checkCulture(main.culture);

    main.region = "All Regions";
        
    main.died = "All Houses";
       
    main.checkRegion(main.region);

    main.checkDiedOut(main.died);

    main.author = "All Authors";
        
    main.publish = "All Publishers";
        
    main.mediatype = "All MediaTypes";
        
    main.decade = "All Decades";
        
    main.checkAuthor(main.author);
        
    main.checkPublisher(main.publish);
        
    main.checkDecade(main.decade);
        
    main.checkMediaType(main.mediatype);

  }
	  
	else if (currentCategory == "Books") {
        
    main.gender = "All Genders";
        
    main.culture = "All Cultures";
       
    main.checkGender(main.gender);
        
    main.checkCulture(main.culture);

    main.region = "All Regions";
        
    main.died = "All Houses";
       
    main.checkRegion(main.region);

    main.checkDiedOut(main.died);

  }

  else if (currentCategory == "Characters") {
        
    main.author = "All Authors";
        
    main.publish = "All Publishers";
        
    main.mediatype = "All MediaTypes";
        
    main.decade = "All Decades";
        
    main.checkAuthor(main.author);
        
    main.checkPublisher(main.publish);
        
    main.checkDecade(main.decade);
        
    main.checkMediaType(main.mediatype);

    main.region = "All Regions";
        
    main.died = "All Houses";
       
    main.checkRegion(main.region);

    main.checkDiedOut(main.died);

  }

  else if (currentCategory = 'Houses') {
        
    console.log("Hello Houses");
  
    main.gender = "All Genders";
        
    main.culture = "All Cultures";
        
    main.checkGender(main.gender);
        
    main.checkCulture(main.culture);

    main.author = "All Authors";
    
    main.publish = "All Publishers";
        
    main.mediatype = "All MediaTypes";
    
    main.decade = "All Decades";
    
    main.checkAuthor(main.author);
        
    main.checkPublisher(main.publish);
        
    main.checkDecade(main.decade);
        
    main.checkMediaType(main.mediatype);
      
  }

};

/*Function to reset all filters in All Categories View */

this.resetAllFilters = function() {
   
   main.gender = "All Genders";
        
   main.culture = "All Cultures";

   main.region = "All Regions";
        
   main.died = "All Houses";
  
   main.author = "All Authors";
        
   main.publish = "All Publishers";
        
   main.mediatype = "All MediaTypes";
        
   main.decade = "All Decades";

   main.charmodel = "All Categories";

   main.sort = "Forward";
    
   main.checkCategory(main.charmodel);
            
   main.checkGender(main.gender);
        
   main.checkCulture(main.culture);

   main.checkRegion(main.region);

   main.checkDiedOut(main.died);

   main.checkAuthor(main.author);
        
   main.checkPublisher(main.publish);
        
   main.checkDecade(main.decade);
        
   main.checkMediaType(main.mediatype);

   main.checkOrder(main.sort);
          
};

this.whichCategory = function(url) {

    main.whichCall = url.split('/')[4];

    gotWhichCategory.setWhichCategory(main.whichCall);

};


/* Function to pass data about Books from one controller to other with the help of service */

this.passBookInfo = function(url,name,isbn,authors,numberOfPages,publisher,country,mediaType,released,characters,povchar) {

    main.allBookDetails.url = url;

    main.allBookDetails.name = name;

    var tempName = name.toLowerCase().replace(/ /g,'');

    main.allBookDetails.isbn = isbn;

    main.allBookDetails.authors = authors;

    main.allBookDetails.noOfPages = numberOfPages;

    main.allBookDetails.publisher = publisher;

    main.allBookDetails.country = country;

    main.allBookDetails.mediaType = mediaType;

    main.allBookDetails.released = released;

    (characters.length != 0)?(main.allBookDetails.characters = characters):(main.allBookDetails.characters="");

    (povchar.length != 0)?(main.allBookDetails.povCharacters = povchar):(main.allBookDetails.povCharacters="");

    main.allBookDetails.heading = url.split('/')[4]

    main.allBookDetails.characterList = main.characterDetails;

    console.log(main.allBookDetails.characterList);

    main.allBookDetails.callFunc = "books";

    var type = "books";

    main.itemUrl = $routeParams.type;

    main.itemName = $routeParams.tempName;

    gotBooks.setBooks(main.allBookDetails);

    gotCategory.setCategory(main.charmodel);

    gotMedia.setMediaType(main.mediatype);
    
    gotDecade.setDecade(main.decade);

    gotDetails.setAuthor(main.author);

    gotPublisher.setPublisher(main.publish);
     
  }
  
  /* Function to pass data about Characters from one controller to other with the help of service */
  
  this.passCharInfo = function(url,name,gender,culture,born,died,titles,aliases,father,mother,spouse,allegiances,books,povBooks,tvSeries,playedBy) {
	  
	  main.allCharDetails.url = url;
	  
	  main.allCharDetails.name = name;

    var tempName = name.toLowerCase().replace(/ /g,'');
	  
	  main.allCharDetails.gender = gender;

    main.allCharDetails.culture = culture;
	  
	  main.allCharDetails.born = born;
	  
	  main.allCharDetails.died = died;
	  
	  main.allCharDetails.titles = titles;
	  
	  main.allCharDetails.aliases = aliases;
	  
	  main.allCharDetails.father = father;
	  
	  main.allCharDetails.mother = mother;
	  
	  main.allCharDetails.spouse = spouse;

    main.allCharDetails.characterList = main.characterDetails;

    main.allCharDetails.bookList = main.bookDetails;

    main.allCharDetails.houseList = main.houseDetails;
	  
	  (allegiances.length != 0)?(main.allCharDetails.allegiances = allegiances):(main.allCharDetails.allegiances = "");
	  
	  (books.length != 0)?(main.allCharDetails.books = books):(main.allCharDetails.books = "");
	  
	  (povBooks.length != 0)?(main.allCharDetails.povBooks = povBooks):(main.allCharDetails.povBooks = "");
	  
	  main.allCharDetails.tvSeries = tvSeries;
	  
	  main.allCharDetails.playedBy = playedBy;
    
    main.allCharDetails.heading = url.split('/')[4];

    main.allCharDetails.callFunc = "characters";

	  var type = "characters";

	  main.itemUrl = $routeParams.type;

    main.itemName = $routeParams.tempName;

    gotCharacters.setCharacters(main.allCharDetails);

    gotCategory.setCategory(main.charmodel);

    gotGender.setGender(main.gender);

    gotCulture.setCulture(main.culture);
	   
  }

  /* Function to pass data about Houses from one controller to other with the help of service */
  
  this.passHouseInfo = function(url,name,region,coatOfArms,words,titles,seats,currentLord,heir,overlord,founded,founder,diedOut,ancestralWeapons,cadetBranches,swornMembers) {
	  
	  main.allHouseDetails.url = url;
	  
	  main.allHouseDetails.name = name;

    var tempName = name.toLowerCase().replace(/ /g,'');
	  
	  main.allHouseDetails.region = region;
	  
	  main.allHouseDetails.coatOfArms = coatOfArms;
	  
	  main.allHouseDetails.words = words;
	  
	  main.allHouseDetails.titles = titles;
	  
	  main.allHouseDetails.seats = seats;
	  
	  main.allHouseDetails.currentLord = currentLord;
	  
	  main.allHouseDetails.heir = heir;
	  
	  main.allHouseDetails.overlord = overlord;
	  
	  main.allHouseDetails.founded = founded;
	  
	  main.allHouseDetails.founder = founder;
	  
	  main.allHouseDetails.diedOut = diedOut;
	  
	  main.allHouseDetails.ancestralWeapons = ancestralWeapons;

    (cadetBranches.length != 0)?(main.allHouseDetails.cadetBranches = cadetBranches):(main.allHouseDetails.cadetBranches = "");
	  
	  (swornMembers.length != 0)?(main.allHouseDetails.swornMembers = swornMembers):(main.allHouseDetails.swornMembers = "");

    main.allHouseDetails.characterList = main.characterDetails;

    main.allHouseDetails.houseList = main.houseDetails;
	  
	  main.allHouseDetails.heading = url.split('/')[4];

    main.allHouseDetails.callFunc = "houses";
	  
	  var type = "houses";

	  main.itemUrl = $routeParams.type;

    main.itemName = $routeParams.tempName;
    
    gotHouses.setHouses(main.allHouseDetails);

    gotCategory.setCategory(main.charmodel);

    gotRegion.setRegion(main.region);

    gotDiedOut.setDiedOut(main.died);
	   
  }
  
}]); // end controller