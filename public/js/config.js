//Setting up route
window.app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/lists', {
            templateUrl: 'views/lists/list.html'
        }).
        when('/lists/create', {
            templateUrl: 'views/lists/create.html'
        }).
        when('/lists/:listId/edit', {
            templateUrl: 'views/lists/edit.html'
        }).
        when('/lists/:listId', {
            templateUrl: 'views/lists/view.html'
        }).
        when('/', {
            templateUrl: 'views/index.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

//Setting HTML5 Location Mode
window.app.config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix("!");
    }
]);