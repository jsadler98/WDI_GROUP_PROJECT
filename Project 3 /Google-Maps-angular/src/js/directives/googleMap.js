angular.module('taxiHelp').directive('googleMap', googleMap);

googleMap.$inject = ['$window'];
function googleMap($window) {
  const directive = {
    restrict: 'E',
    replace: true,
    template: '<div class="google-map"></div>',
    scope: {
      center: '='
    },
    link($scope, element) {
      console.log(element[0]);
      const map = new $window.google.maps.Map(element[0], {
        zoom: 14,
        center: $scope.center
      });

      new $window.google.maps.Marker({
        position: $scope.center,
        map: map,
        animation: $window.google.maps.Animation.DROP
      });
    }
  };
  return directive;
}
