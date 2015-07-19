function SearchController (SearchService) {
    var vm = this;
    vm.items = SearchService.items;
}

angular.module('gfgtimes')
  .controller('SearchController', SearchController);
