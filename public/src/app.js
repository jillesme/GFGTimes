function RouterConfig ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/search.html',
        controller: 'SearchController',
        controllerAs: 'vm'
      })
      .when('/:category/:url', {
        templateUrl: 'views/viewitem.html',
        controller: 'ItemController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
}

angular.module('gfgtimes', ['ngRoute'])
  .config(RouterConfig);
