angular.module('crazy.lists').controller('ListsController', ['$scope', '$routeParams', '$location', 'Global', 'Lists', function ($scope, $routeParams, $location, Global, Lists) {
    $scope.global = Global;

    $scope.create = function() {
        var list = new Lists({
            title: this.title,
            content: this.content
        });
        list.$save(function(response) {
            $location.path("lists/" + response._id);
        });

        this.title = "";
        this.content = "";
    };

    $scope.remove = function(list) {
        list.$remove();  

        for (var i in $scope.lists) {
            if ($scope.lists[i] == list) {
                $scope.lists.splice(i, 1);
            }
        }
    };

    $scope.update = function() {
        var list = $scope.list;
        if (!list.updated) {
            list.updated = [];
        }
        list.updated.push(new Date().getTime());

        list.$update(function() {
            $location.path('lists/' + list._id);
        });
    };

    $scope.find = function() {
        Lists.query(function(lists) {
            $scope.lists = lists;
        });
    };

    $scope.findOne = function() {
        Lists.get({
            listId: $routeParams.listId
        }, function(list) {
            $scope.list = list;
        });
    };
}]);