/* Filter data based on Author Name */

myApp.filter('authorFilter',['gotDetails','gotCategory', function(gotDetails,gotCategory) {
  
  return function(input){
    
    var out = [input[0]];
    
    var searchAuthor = gotDetails.getAuthor();
    
    var givenCategory = gotCategory.getCategory();
    
    if (givenCategory == "Books") {
      
      angular.forEach(input, function(currentFactor,key1){

        angular.forEach(currentFactor.authors, function(value,key){

          if(currentFactor.authors[key] === searchAuthor){
          
            out.push(currentFactor)
          
          }
        
        });
  
      });
	
	 }
    
   if (searchAuthor == "All Authors") {
      
      return input;

   }
    
    return out;
  
  }

}]);

/* Filter data based on Publisher Name */

myApp.filter('publisherFilter',['gotPublisher','gotCategory', function(gotPublisher,gotCategory) {
  
  return function(input){

    var out = [input[0]];
    
    var searchPublisher = gotPublisher.getPublisher();
	 
    var givenCategory = gotCategory.getCategory();
    
    if (givenCategory == "Books") {
      
      angular.forEach(input, function(currentFactor,key1){
        
        if(currentFactor.publisher === searchPublisher){
        
          out.push(currentFactor)
        
        }
      
      });
	  
    }
      
    if (searchPublisher == "All Publishers") {
    
      return input;
    
    }
    
    return out;
  }

}]);

/* Filter data based on Media Type */

myApp.filter('mediaTypeFilter',['gotMedia','gotCategory', function(gotMedia,gotCategory) {
  
  return function(input){

    var out = [input[0]];
    
    var searchMediaType = gotMedia.getMediaType();
    
    var givenCategory = gotCategory.getCategory();
    
    if (givenCategory == "Books") {
    
      angular.forEach(input, function(currentFactor,key1){

        if(currentFactor.mediaType === searchMediaType){
        
          out.push(currentFactor)
        
        }

      });
       
    }
    
    if (searchMediaType == "All MediaTypes") {
    
      return input;
    
    }
    
    return out;
  }
  
}]);

/* Filter data based on Decade in which the book was released */

myApp.filter('decadeFilter',['gotDecade','gotCategory', function(gotDecade,gotCategory) {
  
  return function(input){

    var out = [input[0]];
    
    var searchDecade = gotDecade.getDecade();
    
    var givenDecade = (searchDecade != "All Decades")?searchDecade.split(' ')[3].split("'")[0]:'';
    
    var givenDecadeNumber = parseInt(givenDecade);
    
    var givenCategory = gotCategory.getCategory();
    
    if (givenCategory == "Books") {
    
      angular.forEach(input, function(currentFactor,key1){
      
	       if (currentFactor != "Books") {
        
            var givenYear = (currentFactor.released != undefined)?currentFactor.released.split('-')[0]:'';
      
            var givenYearNumber = parseInt(givenYear);
    
            if(givenYearNumber >= givenDecadeNumber && givenYearNumber < givenDecadeNumber+10){
              
              out.push(currentFactor)
            
            }
	       
         }
      
      });
	  
    }
      
    if (searchDecade == "All Decades") {
    
      return input;
    
    }
    
    return out;
  }

}]);

/* Filter data based on the gender of the character */

myApp.filter('genderFilter',['gotCulture','gotGender','gotCategory', function(gotCulture,gotGender,gotCategory) {
  
  return function(input){

    var givenCulture = gotCulture.getCulture();
	  
    var out = [];
	 
    var searchGender = gotGender.getGender();
     
    var givenCategory = gotCategory.getCategory();
	
    if (givenCategory == "Characters") {
      
      console.log(input);
      
      var titleChar = input[13];
      
      (out[0] = titleChar);
      
      //console.log(out[0]);
      
      //console.log(titleChar);
      
      //(givenCulture != 'All Cultures')?(out[0] = input[0]):'';
      
      angular.forEach(input, function(currentFactor,key1){

        (currentFactor.gender != undefined && currentFactor.gender === searchGender)?out.push(currentFactor):'';
      
      });
	  }
    
    if (searchGender == "All Genders") {
    
      return input;
    
    }
    
    return out;
  
  }

}]);

/* Filter data based on the culture of the character */

myApp.filter('cultureFilter',['gotCulture','gotGender','gotCategory', function(gotCulture,gotGender,gotCategory) {
 
  return function(input){

  var givenGender = gotGender.getGender();
	  
  var out = [];
	 
  var searchCulture = gotCulture.getCulture();
    
  var givenCategory = gotCategory.getCategory();
    
  if (givenCategory == "Characters") {
      
      console.log(input);
      
      var titleChar = input[13];
      
      (out[0] = titleChar);
    
     // (givenGender != 'All Genders')?(out[0] = input[0]):'';
      
      angular.forEach(input, function(currentFactor,key1){
        
        (currentFactor.culture != undefined && currentFactor.culture === searchCulture)?out.push(currentFactor):'';
        
      });
  }
    
  if (searchCulture == "All Cultures") {
     
      return input;
  }
    
    return out;
  
  }

}]);

/* Filter data based on the region of the house */

myApp.filter('regionFilter',['gotRegion','gotCategory','gotDiedOut', function(gotRegion,gotCategory,gotDiedOut) {
  
  return function(input){
	
  var out = [];
  
     var givenDiedOut = gotDiedOut.getDiedOut();
      
     var searchRegion = gotRegion.getRegion();
    
     var givenCategory = gotCategory.getCategory();
      
     if (givenCategory == "Houses") {
      
       console.log(input);
       
       var titleHouse = input[2148];
      
       (out[0] = titleHouse);
      
       angular.forEach(input, function(currentFactor,key1){

          (currentFactor.region != undefined && currentFactor.region === searchRegion)?out.push(currentFactor):'';
       
       });
      
      }
    
    if (searchRegion == "All Regions") {
      
      return input;
    
    }
    
    return out;
  
  }

}]);

/* Filter data based on the house is died out or not */

myApp.filter('diedoutFilter',['gotDiedOut','gotCategory','gotRegion', function(gotDiedOut,gotCategory,gotRegion) {
 
  return function(input){

		var out = [];
    
    var givenRegion = gotRegion.getRegion();
    
    var searchDiedOut = gotDiedOut.getDiedOut();
    
    var givenCategory = gotCategory.getCategory();
    
    if (givenCategory == "Houses") {
      
      angular.forEach(input, function(currentFactor,key1){

        if(currentFactor.diedOut  == "" && searchDiedOut == "Houses Not Died Out"){
        
          out.push(currentFactor)
        
        }

        else if (currentFactor.diedOut  != "" && searchDiedOut == "Houses Died Out"){
        
          out.push(currentFactor);
        
        }
      
      });
	
	  }
      
    if (searchDiedOut == "All Houses") {
    
      return input;
    
    }
    
    return out;
  
  }

}]);

/* Filter to remove spaces between the string */

myApp.filter('removeSpaces', [function() {
    
    return function(string) {
       
        if (!angular.isString(string)) {
       
            return string;
       
        }
       
        return string.replace(/[\s]/g, '');
    };

}]);