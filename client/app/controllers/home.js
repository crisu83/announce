angular.module('AnnounceApp').controller('HomeCtrl', ['$scope', 'Restangular', function($scope, Restangular) {
    var messages = Restangular.all('messages');
    $scope.messages = messages.getList();
}]);