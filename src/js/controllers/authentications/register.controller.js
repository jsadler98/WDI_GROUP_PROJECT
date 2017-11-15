angular
  .module('wdi-project-3')
  .controller('registerCtrl', registerCtrl);

registerCtrl.$inject = ['$auth', '$state', 'currentUserService', 'filepickerService', '$scope'];
function registerCtrl($auth, $state, currentUserService, filepickerService, $scope) {
  const vm = this;

  vm.showModal = false;
  vm.submitForm = register;
  vm.user = {};

  vm.pickFile = (e) => {
    e.preventDefault();
    filepickerService.pick(
      {mimetype: 'image/*'},
      (Blob) => {
        if (Blob && Blob.url) {
          vm.user.image = Blob.url;
          $scope.$apply();
        }
      }
    );
  };

  function register() {
    $auth
      .signup(vm.user)
      .then(() => $auth.login(vm.user))
      .then(() => {
        currentUserService.getUser();
        $state.go('map');
      });
  }
}
