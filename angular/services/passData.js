
/*Factory to transfer information about the selected Category to the filter */

myApp.factory('gotCategory', function() {
	
	var category = null;
	
	return {
	
		getCategory:function() {
	
			return category;
	
		},
	
		setCategory:function(value) {
	
			category = value;
		
		},

	}

});

/*Factory to transfer information about the selected Author to the filter */

myApp.factory('gotDetails', function() {
	
	var author = null;
	
	return {
	
		getAuthor:function() {
	
			return author;
	
		},
	
		setAuthor:function(value) {
	
			author = value;
		
		},

	}

});

/*Factory to transfer information about the selected Publisher to the filter */

myApp.factory('gotPublisher', function() {
	
	var allpublishDetails = null;

	return {

		getPublisher:function() {
	
			return allpublishDetails;
	
		},
	
		setPublisher:function(value) {
	
			allpublishDetails = value;
		
		}
	
	}

});

/*Factory to transfer information about the selected Media Type to the filter */

myApp.factory('gotMedia', function() {
	
	var allmediatype = null;

	return {

		getMediaType:function() {
	
			return allmediatype;
	
		},
	
		setMediaType:function(value) {
	
			allmediatype = value;
		
		}
	
	}

});

/*Factory to transfer information about the selected Decade to the filter */

myApp.factory('gotDecade', function() {
	
	var alldecades = null;

	return {

		getDecade:function() {
	
			return alldecades;
	
		},
	
		setDecade:function(value) {
	
			alldecades = value;
		
		}
	
	}

});

/*Factory to transfer information about the selected Gender to the filter */

myApp.factory('gotGender', function() {
	
	var allgenders = null;

	return {

		getGender:function() {
	
			return allgenders;
	
		},
	
		setGender:function(value) {
	
			allgenders = value;
		
		}
	
	}

});

/*Factory to transfer information about the selected Culture to the filter */

myApp.factory('gotCulture', function() {
	
	var allcultures = null;

	return {

		getCulture:function() {
	
			return allcultures;
	
		},
	
		setCulture:function(value) {
	
			allcultures = value;
		
		}
	
	}

});

/*Factory to transfer information about the selected Region to the filter */

myApp.factory('gotRegion', function() {
	
	var allregions = null;

	return {

		getRegion:function() {
	
			return allregions;
	
		},
	
		setRegion:function(value) {
	
			allregions = value;
		
		}
	
	}

});

/*Factory to transfer information about the selected Died Out to the filter */

myApp.factory('gotDiedOut', function() {
	
	var allDiedOut = null;

	return {

		getDiedOut:function() {
	
			return allDiedOut;
	
		},
	
		setDiedOut:function(value) {
	
			allDiedOut = value;
		
		}
	
	}

});

/*Factory to transfer information about the Books to the Single Category Controller */

myApp.factory('gotBooks', function() {
	
	var books = null;

	return {

		getBooks:function() {
	
			return books;
	
		},
	
		setBooks:function(value) {
	
			books = value;
		
		}
	
	}

});

/*Factory to transfer information about the Characters to the Single Category Controller */

myApp.factory('gotCharacters', function() {
	
	var characters = null;

	return {

		getCharacters:function() {
	
			return characters;
	
		},
	
		setCharacters:function(value) {
	
			characters = value;
		
		}
	
	}

});

/*Factory to transfer information about the Houses to the Single Category Controller */

myApp.factory('gotHouses', function() {
	
	var houses = null;

	return {

		getHouses:function() {
	
			return houses;
	
		},
	
		setHouses:function(value) {
	
			houses = value;
		
		}
	
	}

});

myApp.factory('gotWhichCategory', function() {
	
	var givenCategory = null;

	return {

		getWhichCategory:function() {
	
			return givenCategory;
	
		},
	
		setWhichCategory:function(value) {
	
			givenCategory = value;
		
		}
	
	}

});
