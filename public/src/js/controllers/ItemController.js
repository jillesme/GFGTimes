function ItemController ($window, $routeParams, SearchService) {

  var vm = this;
  var food = SearchService.findItem($routeParams.category, $routeParams.url);

  vm.title = '[' + food.category + '] ' + food.item.name;
  vm.time = food.item.time;

  vm.goBack = function () {
    $window.history.back();
  };

  // TODO: Add a timer and use this.
  // vm.timers = food.item.time.split('-');

}

angular.module('gfgtimes')
  .controller('ItemController', ItemController);
