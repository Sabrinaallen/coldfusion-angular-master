    var phonecatApp = angular.module('downloadApp', [
    'ngRoute',
    'downloadControllers'
    ]);
     
    phonecatApp.config(['$routeProvider',
    function($routeProvider) {
    $routeProvider.
    when('/securityanalyzer', {
    templateUrl: 'partial.cfm',
    controller: 'FbanalyzerCtrl'
    }).
    otherwise({
    redirectTo: '/securityanalyzer'
    });
    }]);