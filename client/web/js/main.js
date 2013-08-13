'use strict';

angular.module('AnnounceApp', ['ui.compat', 'restangular'])
    .config(['$locationProvider', '$stateProvider', '$urlRouterProvider', 'RestangularProvider', function($locationProvider, $stateProvider, $urlRouterProvider, RestangularProvider) {
        RestangularProvider.setBaseUrl('/api');
        // enable html5 mode to get rid of the hash in the url
        $locationProvider.html5Mode(true);
        // all unmatched urls should be sent to /home
        $urlRouterProvider.otherwise("/home");
        // set up states
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'partials/home.html',
                controller: 'HomeCtrl'
            });
    }]);
angular.module('AnnounceApp').controller('AppCtrl', ['$scope', function($scope) {

}]);
angular.module('AnnounceApp').controller('HomeCtrl', ['$scope', 'Restangular', function($scope, Restangular) {
    var messages = Restangular.all('messages');
    $scope.messages = messages.getList();
}]);

