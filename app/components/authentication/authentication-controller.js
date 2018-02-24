'use strict';
export default function authenticationCtrl($rootScope, $scope, auth, $state) {

    var vm = this;
vm.loading = false;
    vm.authenticationError = false;
    vm.cancel = cancel;
    vm.credentials = {};
    vm.login = login;
    vm.password = null;
    vm.register = register;

    vm.username = null;

    function cancel() {
        vm.credentials = {
            username: null,
            password: null
        };
        vm.authenticationError = false;
    }

    function login() {
        vm.loading= true;
        auth.login({
            username: vm.username,
            password: vm.password,
            rememberMe: true
        }).then(function(response) {
            vm.authenticationError = false;
            $state.go('app.home');
            $rootScope.$broadcast('authenticationSuccess');

        }).catch(function(error) {
            console.log(error);
            vm.loading= false;
            vm.authenticationError = true;

        });
    }

    function register() {
        $state.go('app.account');
    }


}