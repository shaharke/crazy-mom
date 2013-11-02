//Lists service used for lists REST endpoint
angular.module('crazy.lists').factory("Lists", ['$resource', function($resource) {
    return $resource('lists/:listId', {
        listId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);