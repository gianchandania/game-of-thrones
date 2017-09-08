
myApp.config(['$routeProvider', function($routeProvider){
    
    $routeProvider
        .when('/',{
            
            templateUrl     : 'views/frontpage_view.html'  
        
        })
        
        .when('/about',{
            // location of the template
            templateUrl     : 'views/about_view.html', 
            
        })
		
        .when('/allinfo',{

            templateUrl     : 'views/allinfo_view.html',
        
            controller      : 'mainController',
        
            controllerAs    : 'allDetails'
        
        })
        
        .when('/allinfo/:itemUrl-:itemName',{
        
            templateUrl     : 'views/singleitem-view.html',
        
            controller      : 'singleItemController',
        
            controllerAs    : 'singleDetail'
        
        })
        
        .otherwise(
            {
                //redirectTo:'/'
                template   : '<div class="view-section"><h1>404 page not found</h1></div>'
            }
        );
}]);