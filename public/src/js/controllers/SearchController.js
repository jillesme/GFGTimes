function SearchController (SearchService) {
    var vm = this;
    vm.items = SearchService.items;

    vm.goTo = function (food) {
      alert('going to food!');
    }
}
angular.module('gfgtimes')
  .controller('SearchController', SearchController);
