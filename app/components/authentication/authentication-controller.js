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

    function login(event) {
        event.preventDefault();
        authenticationSrv.login({
            username: vm.username,
            password: vm.password,
        }).then(function() {
            vm.authenticationError = false;
            $state.go('app.account');

            $rootScope.$broadcast('authenticationSuccess');

            // previousState was set in the authExpiredInterceptor before being redirected to login modal.
            // since login is successful, go to stored previousState and clear previousState

        }).catch(function() {
            vm.authenticationError = true;
        });
    }

    function register() {

        $state.go('app.account');
    }


}