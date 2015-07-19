function minuteTimer ($interval) {
  return {
    restrict: 'EA',
    scope: {
      minutes: '@'
    },
    controller: function () {
      // This is going to be a timer.
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
