angular.module('crazy.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        "title": "Lists",
        "link": "lists"
    }, {
        "title": "Create New Lists",
        "link": "lists/create"
    }];
    
    $scope.isCollapsed = false;
}]);