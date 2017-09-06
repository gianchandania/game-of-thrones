/*Controller for footer */

myApp.controller("footerController",['$timeout',function ($timeout) {

	var main = this;

	this.footerLoaded = false;
    
    $timeout(function () {
    
        main.footerLoaded = true
    
    }, 2000);

}]);
