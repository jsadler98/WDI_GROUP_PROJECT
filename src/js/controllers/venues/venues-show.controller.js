angular
  .module('wdi-project-3')
  .controller('venuesShow', venuesShow);

venuesShow.$inject = ['Venue', '$stateParams'];
function venuesShow(Venue, $stateParams) {
  const vm = this;

  // vm.venue = Venue.get({id: $stateParams.id});

  // make request to Eventful API to find venue info using $stateParams.id

  // comments
  // Comment.query({ venueId: $stateParams.id })


}