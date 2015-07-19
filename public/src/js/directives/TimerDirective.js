function minuteTimer () {
  return {
    restrict: 'EA',
    scope: {
      minutes: '@'
    },
    controller: function () {
      // This is going to be a timer.
      // Might want to use $interval or something
    },
    template: [
      '<div>',
        'soon there will be a timer here',
      '</div>'
    ].join('')
  };
}

angular.module('gfgtimes')
  .directive('minuteTimer', minuteTimer);
