'use strict';

accountCtrl.$inject = ['$translate', '$state', '$timeout', 'auth', 'errorConstants'];

export default function accountCtrl($translate, $state, $timeout, auth, errorConstants) {
    var vm = this;

    vm.doNotMatch = null;
    vm.error = null;
    vm.errorUserExists = null;
    //vm.login = LoginService.open;
    vm.createAccount = createAccount;
    vm.registerAccount = {};
    vm.success = null;

    //$timeout(function() { angular.element('#login').focus(); });

    function createAccount() {
        if (vm.registerAccount.password !== vm.confirmPassword) {
            vm.doNotMatch = 'ERROR';
        } else {
            vm.registerAccount.langKey = $translate.use();
            vm.doNotMatch = null;
            vm.error = null;
            vm.errorUserExists = null;
            vm.errorEmailExists = null;

            auth.createAccount(vm.registerAccount).then(function() {
                vm.success = 'OK';
                $state.go('app.personnalInfo');
            }).catch(function(response) {
                vm.success = null;
                if (response.status === 400 && angular.fromJson(response.data).type === errorConstants.LOGIN_ALREADY_USED_TYPE) {
                    vm.errorUserExists = 'ERROR';
                } else if (response.status === 400 && angular.fromJson(response.data).type === errorConstants.EMAIL_ALREADY_USED_TYPE) {
                    vm.errorEmailExists = 'ERROR';
                } else {
                    vm.error = 'ERROR';
                }
            });
        }

    }
}