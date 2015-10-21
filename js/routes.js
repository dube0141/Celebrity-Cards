angular.module('Celebrities')

.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl:'templates/main.html',
        controller: 'MainCtrl'
    })
    .when('/details/:itemID', {
        templateUrl:'templates/details.html',
        controller: 'DetailsCtrl'
    })
    .otherwise({redirectTo:'/'});
});