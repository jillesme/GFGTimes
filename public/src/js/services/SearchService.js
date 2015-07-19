function SearchService () {
  var SearchService = {};

  SearchService.findItem = function (category, url) {

    var result = {};

    var foundCategory = SearchService.items.filter(function (search) {
      return search.categoryUrl === category;
    });

    var foundItem;
    if (foundCategory.length) {
      result.category = foundCategory[0].category;
      foundItem = foundCategory[0].items.filter(function (item) {
        return item.url === url;
      });
    }

    if (foundItem.length) {
      result.item = foundItem[0];
    }

    return result;

  };

  SearchService.items = [
    {
      category: 'Beef',
      categoryUrl: 'beef',
      items: [
        {
          url: 'fillet',
          name: 'fillet',
          time: '5-7'
        },
        {
          url: 'lion-steak',
          name: 'loin steak',
          time: '7-8'
        },
        {
          url: 'burger-50g',
          name: 'burger, 50g',
          time: '5-6'
        },
        {
          url: 'burger-100g',
          name: 'burger, 100g ',
          time: '7-8'
        },
        {
          url: 'burger-200g',
          name: 'burger, 200g',
          time: '8-9'
        },
        {
          url: 'kebabs-25mm-cube',
          name: 'kebabs, 25mm cube',
          time: '7-8'
        },
        {
          url: 'round-steak',
          name: 'round steak',
          time: '5-7'
        },
        {
          url: 'sausages-thin',
          name: 'sausages (thin)',
          time: '5-6'
        },
        {
          url: 'sausages-thick',
          name: 'sausages (thick)',
          time: '7-8'
        },
        {
          url: 'sirloin',
          name: 'sirloin',
          time: '7-9'
        },
        {
          url: 't-bone',
          name: 'T-Bone',
          time: '8-9'
        }
      ]
    },
    {
      category: 'Fruit',
      categoryUrl: 'fruit',
      items: [
        {
          url: 'apple-halve-slice',
          name: 'apple, halve/slice',
          time: '6-8'
        },
        {
          url: 'bananas-slice-lengthwise',
          name: 'bananas, slice lengthwise',
          time: '3-4'
        },
        {
          url: 'nectarines-halve-slice',
          name: 'nectarines, halve/slice',
          time: '3-5'
        },
        {
          url: 'peaches-halve-slice',
          name: 'peaches, halve/slice',
          time: '3-5'
        },
        {
          url: 'pineapple-slice',
          name: 'pineapple, slice',
          time: '3-7'
        }
      ]
    },
    {
      category: 'Pork',
      categoryUrl: 'pork',
      items:[
        {
          url: 'chops-12mm',
          name: 'chops, 12mm',
          time: '5-6'
        },
        {
          url: 'gammon-steak',
          name: 'gammon steak',
          time: '5-6'
        },
        {
          url: 'kebabs-25mm-cube',
          name: 'kebabs, 25mm cube',
          time: '7-8'
        },
        {
          url: 'minced',
          name: 'minced',
          time: '7-8'
        },
        {
          url: 'sausages-thin',
          name: 'sausages (thin)',
          time: '5-6'
        },
        {
          url: 'sausages-thick',
          name: 'sausages (thick)',
          time: '7-8'
        },
        {
          url: 'tenderloin-12mm',
          name: 'tenderloin, 12mm ',
          time: '4-6'
        }
      ]
    },
    {
      category: 'Chicken / Turkey',
      categoryUrl: 'chicken-turkey',
      items:[
        {
          url: 'chicken-breast-pieces',
          name: 'chicken breast pieces',
          time: '5-7'
        },
        {
          url: 'burger-50g-fresh',
          name: 'burger, 50g, fresh',
          time: '4'
        },
        {
          url: 'burger-50g-frozen',
          name: 'burger, 50g, frozen',
          time: '5'
        },
        {
          url: 'burger-100g-fresh',
          name: 'burger, 100g, fresh',
          time: '5'
        },
        {
          url: 'burger-100g-frozen',
          name: 'burger, 100g, frozen',
          time: '6'
        },
        {
          url: 'kebabs-25mm-cube',
          name: 'kebabs, 25mm cube',
          time: '7-8'
        },
        {
          url: 'thighs-chicken',
          name: 'thighs (chicken)',
          time: '5-7'
        },
        {
          url: 'minced',
          name: 'minced',
          time: '7-8'
        },
        {
          url: 'turkey-breast-thin-sliced',
          name: 'turkey breast, thin sliced',
          time: '3-4'
        }
      ]
    },
    {
      category: 'Lamb',
      categoryUrl: 'lamb',
      items: [
        {
          url: 'kebabs-25mm-cube',
          name: 'kebabs, 25mm cube',
          time: '7-8'
        },
        {
          url: 'minced',
          name: 'minced',
          time: '6-7'
        },
        {
          url: 'loin-chops',
          name: 'loin chops',
          time: '4-6'
        }
      ]
    },
    {
      category: 'Sandwitches',
      categoryUrl: 'sandwitches',
      items: [
        {
          url: 'cheese',
          name: 'cheese',
          time: '2-3'
        },
        {
          url: 'ham-cooked',
          name: 'ham (cooked)',
          time: '5-6'
        },
        {
          url: 'roast-beef-cooked',
          name: 'roast beef (cooked)',
          time: '6-7'
        },
        {
          url: 'sausage-cooked',
          name: 'sausage (cooked)',
          time: '6-7'
        },
        {
          url: 'turkey-cooked',
          name: 'turkey (cooked)',
          time: '6-7'
        }
      ]
    },
    {
      category: 'Seafood',
      categoryUrl: 'seafood',
      items: [
        {
          url: 'halibut-steak-12-25mm',
          name: 'halibut steak, 12-25mm',
          time: '6-8'
        },
        {
          url: 'kebabs-25mm-cube',
          name: 'kebabs, 25mm cube',
          time: '4-6'
        },
        {
          url: 'prawn',
          name: 'prawn',
          time: '1-2'
        },
        {
          url: 'red-snapper-fillet',
          name: 'red snapper fillet',
          time: '3-5'
        },
        {
          url: 'salmon-fillet',
          name: 'salmon fillet',
          time: '3-4'
        },
        {
          url: 'salmon-steak-12-25mm',
          name: 'salmon steak, 12-25mm ',
          time: '6-8'
        },
        {
          url: 'scallops',
          name: 'scallops',
          time: '4-6'
        },
        {
          url: 'sea-bass-fillet',
          name: 'sea bass fillet',
          time: '3-5'
        },
        {
          url: 'swordfish-steak-12-25mm',
          name: 'swordfish steak, 12-25mm',
          time: '6-9'
        },
        {
          url: 'tune-steak-12-25mm',
          name: 'tuna steak, 12-25mm',
          time: '6-8'
        }
      ]
    },
    {
      category: 'Snacks',
      categoryUrl: 'snacks',
      items: [
        {
          url: 'calzone',
          name: 'calzone',
          time: '8-9'
        },
        {
          url: 'hot-dogs',
          name: 'hot dogs',
          time: '2-3'
        },
        {
          url: 'quesadillas',
          name: 'quesadillas',
          time: '2-3'
        },
        {
          url: 'tacos-meat-filling',
          name: 'tacos, meat filling',
          time: '6-8'
        }
      ]
    },
    {
      category: 'Vegetables',
      categoryUrl: 'vegetables',
      items: [
        {
          url: 'asparagus',
          name: 'asparagus',
          time: '3-4'
        },
        {
          url: 'carrots-sliced',
          name: 'carrots, sliced',
          time: '5-7'
        },
        {
          url: 'aubergine-slice-cube',
          name: 'aubergine, slice/cube ',
          time: '8-9'
        },
        {
          url: 'onions-thin-slice',
          name: 'onions, thin slice',
          time: '5-6'
        },
        {
          url: 'peppers-thin-slice',
          name: 'peppers, thin slice',
          time: '6-8'
        },
        {
          url: 'peppers-grill-then-skin',
          name: 'peppers, grill then skin',
          time: '2-3'
        },
        {
          url: 'whole-peppers-brushed-with-oil',
          name: 'whole peppers brushed with oil',
          time: '8'
        },
        {
          url: 'potatoes-slice-cube',
          name: 'potatoes, slice/cube',
          time: '7-9'
        },
        {
          url: 'squash-slice-cube',
          name: 'squash, slice/cube',
          time: '6-8'
        }]
    }
  ];

  return SearchService;
}

angular.module('gfgtimes')
.factory('SearchService', SearchService);
