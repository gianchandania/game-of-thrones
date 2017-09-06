// first we have to declare the module. note that [] is where we will declare the dependecies later. Right now we are leaving it blank

var myApp = angular.module('gotApp', ['ngRoute']);

myApp.run(function($rootScope, $location) {

    $rootScope.location = $location;

});