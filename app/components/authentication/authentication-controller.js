'use strict';
export default function authenticationCtrl($scope, authenticationSrv, $state) {

    var vm = this;

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

        authenticationSrv.login({
            username: vm.username,
            password: vm.password,
        }).then(function(response) {
            vm.authenticationError = false;
            $state.go('app.home');

            $rootScope.$broadcast('authenticationSuccess');

        }).catch(function() {
            vm.authenticationError = true;
        });
    }

    function register() {
        $state.go('app.account');
    }


}